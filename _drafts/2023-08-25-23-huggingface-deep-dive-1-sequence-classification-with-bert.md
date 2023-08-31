---
title: "Huggingface deep dive - 1: Sequence classification with BERT"
last_modified_at: 2023-08-25T21:17:02-05:00
categories:
  - Tutorial
tags:
  - huggingface
  - sequence_classification
  - bert
toc: true
---

{{ toc }}


# TLDR
{% highlight python linenos %}
import torch
from transformers import AutoTokenizer, BertForSequenceClassification

# Setup model and tokenizer
checkpoint = "nlptown/bert-base-multilingual-uncased-sentiment"
tokenizer = AutoTokenizer.from_pretrained(checkpoint)
model = BertForSequenceClassification.from_pretrained(checkpoint)

# stage - 1
text = "I really love this book\n"
print(f"text:\t{text}")
inputs = tokenizer(text, return_tensors="pt")

# stage - 2
with torch.no_grad():
    logits = model(**inputs).logits
    
# stage - 3
predictions = torch.nn.functional.softmax(logits, dim=-1)
for id, label in model.config.id2label.items():
    print(f"{label:<7}:\t{round(float(predictions[0][id]), 3)}")
{% endhighlight %}



# Introduction
- [Notebook](https://colab.research.google.com/github/roldanjrgl/huggingface_deep_dive/blob/main/sequence_classification.ipynb)


# Using a pretrained BERT model for sequence classification

{% include figure image_path="assets/posts/2023-08-25-23-sequence-classification-with-bert/pipeline_positive.png" alt="Pipeline"  %}
{% include figure image_path="assets/posts/2023-08-25-23-sequence-classification-with-bert/pipeline_negative.png" alt="Pipeline"  %}


# Setup model and tokenizer
- Define difference between architecture and checkpoint

{% highlight python linenos %}
import torch
from transformers import AutoTokenizer, BertForSequenceClassification

# Setup model and tokenizer
checkpoint = "nlptown/bert-base-multilingual-uncased-sentiment"
tokenizer = AutoTokenizer.from_pretrained(checkpoint)
model = BertForSequenceClassification.from_pretrained(checkpoint
{% endhighlight %}

## Save tokenizer to your local machine




## Save model to your local machine

## Stage 1: Preprocessing
{% highlight python linenos %}
# stage - 1
text = "I really love this book\n"
print(f"text:\t{text}")
inputs = tokenizer(text, return_tensors="pt"

for input, value in inputs.items():
print(f"{input:<15}: \t{value}"
{% endhighlight %}


{% include figure image_path="assets/posts/2023-08-25-23-sequence-classification-with-bert/stage1.png" alt="stage1"  %}

## Stage 2: Model
```py
# stage - 2
with torch.no_grad():
    logits = model(**inputs).logits

print(f"logits: \t{logits}")
```

{% include figure image_path="assets/posts/2023-08-25-23-sequence-classification-with-bert/stage2.png" alt="stage2"  %}


## Stage 3: Postprocessing
```py
import torch

predictions = torch.nn.functional.softmax(logits, dim=-1)
for id, label in model.config.id2label.items():
    print(f"{label:<7}:\t{round(float(predictions[0][id]), 3)}"
```

{% include figure image_path="assets/posts/2023-08-25-23-sequence-classification-with-bert/stage3.png" alt="stage3"  %}

## Complete pipeline

{% include figure image_path="assets/posts/2023-08-25-23-sequence-classification-with-bert/pipeline_detailed.png" alt="this is a placeholder image"  %}
