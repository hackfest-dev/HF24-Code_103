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
        sub_docs = vectorstore.similarity_search(query_text)
        # print(sub_docs[0].metadata['source']+"---")
        # for i in range(0,len(sub_docs)):
        #     print(sub_docs[i].page_content+"\n"+sub_docs[i].metadata['source'])


        result = []
        final_response = []
        for sub_doc in sub_docs:
            result.append({
                'response': sub_doc.page_content,
                'metadata': sub_doc.metadata['source']
            })
        print(result)
        
        for item in result:
            for _id in _ids:
                if _id in item['metadata']:
                    final_response.append({
                        'response': item['response'],
                        '_id': _id
                    })
        print(final_response)

        
        return jsonify({'final_response': final_response})
    
    except KeyError as e:
        return jsonify({'error': f'Missing key: {str(e)}'}), 400
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5005)

# d9c118d8-507d-465c-af6d-67f12a75c92e,d4db8e42-4e02-4abe-996c-2be983be6e1f,1a912750-adfe-4e86-bb5f-02a53eb5b6ad,9a0eb5de-d506-47c1-8eb6-d50dc2a5f404,0b251477-68e3-4280-befc-3b7468633c52,331a2b6d-752e-4062-91ba-a3a86fae4032,48e3afd3-7d4f-47e8-beaf-d3b0006382e1,39dfff9a-6d86-4a24-a5d8-671eab34681c,0e6472fa-2064-4599-a5a4-c856cfb1ce90,b41dc40b-a76c-4068-8b30-542b4a8e51e8,e03adb11-a43c-4d88-bbe1-a5c08869dfe6,d52ff142-1fa2-4509-8635-76af5114d407,6b707cd8-7543-4e2d-95e7-c2f8ae89fe9b,a67fd6ac-8e0f-4f01-a407-28cbb07589d1,e87650b7-3043-4b61-b12e-fb731b82f5eb,5c66a20d-e58f-4645-b6d2-7c3b1d90426b,81d3c2dc-5b21-407e-8956-a8d452060d61,e05e410b-0a6a-4bf4-a251-b5d1dc6b243c
