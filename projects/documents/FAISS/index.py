import os
import faiss
import numpy as np

def load_documents(directory):
    docs = []
    for root, _, files in os.walk(directory):
        for file in files:
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                docs.append({
                    "text": f.read().strip(),
                    "source": filepath
                })
    return docs

def get_embedding(text):
    # Replace with your actual embedding method.
    # For example, using a model from SentenceTransformers:
    # return model.encode(text)
    return np.random.rand(768).astype('float32')  # dummy embedding

directory = "path/to/your/documents"
docs = load_documents(directory)

embeddings = np.array([get_embedding(doc["text"]) for doc in docs])
dimension = embeddings.shape[1]

# Create a FAISS index
index = faiss.IndexFlatL2(dimension)
index.add(embeddings)

# Optionally, save your index and docs for later retrieval.
faiss.write_index(index, "docs.index")
import pickle
with open("docs.pkl", "wb") as f:
    pickle.dump(docs, f)