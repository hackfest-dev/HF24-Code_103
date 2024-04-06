import json
import uuid

def add_unique_ids(json_data):
    for element in json_data:
        element['_id'] = str(uuid.uuid4())
    return json_data

def main():
    input_file_path = 'doc1.json'
    output_file_path = 'output.json'

    # Read input JSON file
    with open(input_file_path, 'r') as f:
        json_data = json.load(f)

    # Add unique IDs to each element
    json_data_with_ids = add_unique_ids(json_data)

    # Write output JSON file with unique IDs
    with open(output_file_path, 'w') as f:
        json.dump(json_data_with_ids, f, indent=4)

    print(f"Unique IDs added and saved to {output_file_path}")

if __name__ == "__main__":
    main()
