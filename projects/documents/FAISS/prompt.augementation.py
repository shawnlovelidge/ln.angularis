def retrieve_documents(query, index, docs, top_k=3):
    query_emb = get_embedding(query).reshape(1, -1)
    distances, indices = index.search(query_emb, top_k)
    # Retrieve the corresponding documents
    return [docs[i]["text"] for i in indices[0] if i < len(docs)]

# Example usage:
query = "What does the new documentation say about X?"
relevant_docs = retrieve_documents(query, index, docs)
augmented_prompt = "\n\n".join(relevant_docs) + "\n\n" + query

# Now feed augmented_prompt to your LLM
print("Augmented Prompt:\n", augmented_prompt)
# response = llm.generate(augmented_prompt)