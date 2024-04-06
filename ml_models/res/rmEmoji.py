#!/usr/bin/env python
"""
Remove emojis from text files in a folder and save cleaned text to new files.
"""

import os
import re
import sys

def remove_emoji(string):
    """
    Removes emojis from the given string.
    """
    emoji_pattern = re.compile(
        "["
        u"\U0001F600-\U0001F64F"  # emoticons
        u"\U0001F300-\U0001F5FF"  # symbols & pictographs
        u"\U0001F680-\U0001F6FF"  # transport & map symbols
        "]",
        flags=re.UNICODE,
    )
    return emoji_pattern.sub("", string)

def process_file(file_path):
    """
    Process a text file, removing emojis and saving the cleaned text to a new file.
    """
    try:
        with open(file_path, "r", encoding="utf-8") as file:
            content = file.read()
            cleaned_content = remove_emoji(content)
            output_file_path = os.path.splitext(file_path)[0] + "_cleaned.txt"
            with open(output_file_path, "w", encoding="utf-8") as output_file:
                output_file.write(cleaned_content)
            print(f"Processed: {file_path} -> {output_file_path}")
    except FileNotFoundError:
        print(f"File not found: {file_path}", file=sys.stderr)

def process_folder(folder_path):
    """
    Process all text files in the specified folder.
    """
    for root, _, files in os.walk(folder_path):
        for file in files:
            if file.lower().endswith(".txt"):
                file_path = os.path.join(root, file)
                process_file(file_path)

def main():
    # Use the current directory instead of a command-line argument
    folder_path = os.getcwd()
    process_folder(folder_path)

if __name__ == "__main__":
    main()
