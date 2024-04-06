# from flask import Flask, request, jsonify
# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app)

# @app.route('/process_data', methods=['POST'])
# def process_data():
#     try:
#         data = request.json
#         query_text = data['query']
#         _ids = data['_ids']
        
#         from langchain.storage._lc_store import create_kv_docstore
#         from langchain.storage import LocalFileStore
#         from langchain.text_splitter import RecursiveCharacterTextSplitter
#         from langchain_community.vectorstores import Chroma
#         from langchain.retrievers import ParentDocumentRetriever

#         # Define your embedding function
#         from langchain_community.embeddings import OllamaEmbeddings
#         embedding = OllamaEmbeddings(model="nomic-embed-text")

#         # Load the existing LocalFileStore
#         fs = LocalFileStore("./embeddings")

#         # Load the existing key-value document store
#         store = create_kv_docstore(fs)

#         # Define your text splitter
#         child_splitter = RecursiveCharacterTextSplitter(chunk_size=400)

#         # Load the existing Chroma vector store
#         vectorstore = Chroma(collection_name="split_parents", embedding_function=embedding, persist_directory="./db")

#         # Create a ParentDocumentRetriever with the existing stores
#         retriever = ParentDocumentRetriever(
#             vectorstore=vectorstore,
#             docstore=store,
#             child_splitter=child_splitter,
#         )

#         # Now you can query the retriever
#         sub_docs = retriever.get_relevant_documents(query_text)
#         for i in range(0,len(sub_docs)):
#             print(sub_docs[i].page_content+"\n------\n"+sub_docs[i].metadata)

        
#         result = []
#         for sub_doc in sub_docs:
#             result.append({
#                 'response': sub_doc.page_content,
#                 'metadata': sub_doc.metadata
#             })
        
#         return jsonify({'result': result})
    
#     except KeyError as e:
#         return jsonify({'error': f'Missing key: {str(e)}'}), 400
    
#     except Exception as e:
#         return jsonify({'error': str(e)}), 500

# if __name__ == '__main__':
#     app.run(debug=True, port=5005)


# -----------------

from flask_cors import CORS
from flask import Flask, request, jsonify

app = Flask(__name__)
CORS(app)

class SubDoc:
    def __init__(self, page_content, metadata):
        self.page_content = page_content
        self.metadata = metadata

@app.route('/handleQ', methods=['POST'])
def process_data():
    try:
        data = request.json
        query_text = data['query']
        _ids = data['_ids']
        
        from langchain.storage._lc_store import create_kv_docstore
        from langchain.storage import LocalFileStore
        from langchain.text_splitter import RecursiveCharacterTextSplitter
        from langchain_community.vectorstores import Chroma
        from langchain.retrievers import ParentDocumentRetriever

        # Define your embedding function
        from langchain_community.embeddings import OllamaEmbeddings
        embedding = OllamaEmbeddings(model="nomic-embed-text")

        # Load the existing LocalFileStore
        fs = LocalFileStore("./embeddings")

        # Load the existing key-value document store
        store = create_kv_docstore(fs)

        # Define your text splitter
        child_splitter = RecursiveCharacterTextSplitter(chunk_size=400)

        # Load the existing Chroma vector store
        vectorstore = Chroma(collection_name="split_parents", embedding_function=embedding, persist_directory="./db")

        # Create a ParentDocumentRetriever with the existing stores
        retriever = ParentDocumentRetriever(
            vectorstore=vectorstore,
            docstore=store,
            child_splitter=child_splitter,
        )

        # Now you can query the retriever
        sub_docs = retriever.get_relevant_documents(query_text)
        for i in range(0,len(sub_docs)):
            print(sub_docs[i].page_content+"\n------\n"+sub_docs[i].metadata)

        
        result = []
        final_response = []
        for sub_doc in sub_docs:
            result.append({
                'response': sub_doc.page_content,
                'metadata': sub_doc.metadata
            })
        
        for item in result:
            for _id in _ids:
                if item['metadata'] == _id + '.txt':
                    final_response.append({
                        'response': item['response'],
                        '_id': _id
                    })
        
        return jsonify({'final_response': final_response})
    
    except KeyError as e:
        return jsonify({'error': f'Missing key: {str(e)}'}), 400
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5005)

