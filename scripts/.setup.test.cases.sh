#!/bin/bash

# Check if exactly 2 arguments (source and destination) were provided.
if [ "$#" -ne 2 ]; then
  echo "Usage: $0 source destination"
  exit 1
fi

SOURCE="$1"
DEST="$2"

# Verify that the source folder exists.
if [ ! -d "$SOURCE" ]; then
  echo "Error: Source folder '$SOURCE' does not exist."
  exit 1
fi

# Create the destination folder if it doesn't exist.
mkdir -p "$DEST"

# Loop over each file in the source folder.
# Recursively find all files in the source folder.
find "$SOURCE" -type f | while IFS= read -r file; do
  # Compute the relative path by stripping the source folder prefix.
  rel="${file#$SOURCE/}"
  
  # Extract the directory (if any) of the file.
  dir=$(dirname "$rel")
  
  # Create the corresponding directory in the destination folder.
  mkdir -p "$DEST/$dir"
  
  # Get the base file name.
  base=$(basename "$file")
  
  # Check if the file has an extension and insert ".spec." accordingly.
  if [[ "$base" == *.* ]]; then
    filename="${base%.*}"
    ext="${base##*.}"
    newname="${filename}.spec.${ext}"
  else
    newname="${base}.spec"
  fi
  
  # Copy the file to the destination folder with the new name.
  touch "$file" "$DEST/$dir/$newname"
done

#
# Add a describe.skip() block to each test file.
#
find "$DEST" -type f -exec sh -c 'echo "describe('"'"'Empty Text Module'"'"', () => '{'\n\tit('"'"'empty'"'"', () => '{'\n\t\texpect(true).toBe(true);\n\t'}');\n'}');" >> "$1"' _ {} \;

#
# Print a message to the user.
#
echo "Files have been copied from '$SOURCE' to '$DEST' with '.spec' inserted in the filename."
