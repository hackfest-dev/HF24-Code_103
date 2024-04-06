import json
import re

def extract_reviews_and_write_to_file(data):
    for item in data:
        reviews = item.get('reviews', [])
        _id = item.get('_id', '')
        with open(f"{_id}.txt", "w", encoding="utf-8") as file:  # Specify encoding
            for review in reviews:
                # Ensure only UTF-8 characters are written to the file
                text = review['text'].encode('utf-8', 'ignore').decode('utf-8')
                # Remove emojis and special characters
                text = re.sub(r'[^\w\s]', '', text)  # Remove special characters
                text = re.sub(r'[^\x00-\x7F]+', '', text)  # Remove non-ASCII characters
                file.write(text + '\n\n')

with open('../output.json', 'r', encoding="utf-8") as file:  # Specify encoding
    json_data = json.load(file)

extract_reviews_and_write_to_file(json_data)
