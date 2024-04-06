from flask import Flask, request, jsonify
from flask_cors import CORS

import os
from langchain_community.llms import Ollama

app = Flask(__name__)
CORS(app)

# Set environment variables
os.environ["LANGCHAIN_TRACING_V2"] = "true"
os.environ["LANGCHAIN_API_KEY"] = "ls__f6cedd82954b4882a54cd5d95c278dc1"

# Initialize Ollama
llm = Ollama(model="medllama2", temperature=0)

@app.route('/invoke', methods=['POST'])
def invoke():
    # Get the request data
    data = request.json

    if 'prompt' in data:
        prompt = data['prompt']

        # Invoke the model
        response = llm.invoke(prompt)
        print(response)

        # Return the response as JSON
        return jsonify({'response': response})
    else:
        # If prompt is not provided in the request, return an error prompt
        return jsonify({'error': 'Message not provided'}), 400

if __name__ == '__main__':
    app.run(debug=True)
