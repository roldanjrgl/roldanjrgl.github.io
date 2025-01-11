---
title: "Embeddings Draft"
last_modified_at: 2023-08-25T21:17:02-05:00
categories:
  - Blog
tags:
  - embeddings 
  - vectors
toc: true
classes: wide
teaser: /assets/posts/2024-10-10-24-vector-embeddings/output.png
header:
  teaser: /assets/images/my-awesome-post-teaser.jpg
---

<script type="text/x-mathjax-config">
    MathJax.Hub.Config({
      TeX: {equationNumbers: {autoNumber: "AMS"}},
    });
</script>

<script type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-MML-AM_CHTML">
</script>

{{ toc }}

# Outline brainstorm
- Vector embeddings introduction
- Intuition
- Similarity between vectors
- State-of-the-art models
- Applications
- Visualization in 2D and 3D


# Vector embeddings introductions


# Similarity between vectors
One powerful way of evaluating the similarity between two documents is using cosine similarity which 
is computed using equation \ref{dot_product}

$$ 
\begin{equation} 
    dot \ product(\textbf{v}, \textbf{w})
        \begin{aligned}[t] 
            &= \textbf{v} \cdot \textbf{w} \label{dot_product} \\
            &= \sum_{i=1}^{N} v_iw_i \\
            &= v_1w_1 + v_2w_2 + \dots + v_Nw_N
        \end{aligned}
\end{equation}
$$


$$
\begin{equation*}
dot \ product(\textbf{v}, \textbf{w})
    \begin{aligned}[t]
        &= \textbf{v} \cdot \textbf{w} \label{dot_product_2} \\
        &= \sum_{i=1}^{N} v_iw_i \\
        &= v_1w_1 + v_2w_2 + \dots + v_Nw_N
    \end{aligned}
\end{equation*}
$$


[//]: # (![alt text]&#40;/assets/posts/2024-10-10-24-vector-embeddings/output.png&#41;{: width="500px" })
![alt text](/assets/posts/2024-10-10-24-vector-embeddings/output.png){: style="display: block; margin-left: auto; margin-right: auto; width: 400px;" }

\begin{equation}
    dot \ product(\textbf{v}, \textbf{w}) = \textbf{v} \cdot \textbf{w}
\end{equation}

this is a random example of text, classes: wide,
this is a random example of text, classes: wide,
this is a random example of text, classes: wide,
this is a random example of text, classes: wide,
this is a random example of text, classes: wide,

\begin{equation}
\ = \textbf{v} \cdot \textbf{w}
\end{equation}

this is a random example of text, classes: wide,
this is a random example of text, classes: wide,
this is a random example of text, classes: wide,
this is a random example of text, classes: wide,
this is a random example of text, classes: wide,


\begin{equation}
= \sum_{i=1}^{N} v_iw_i
\end{equation}



One powerful way of evaluating the similarity between two documents is using cosine similarity which
is computed using equation \ref{dot_product}, \ref{test}

\begin{equation}
    \begin{split}
        f(x) &= x^2 + 2x + 1 \\
             &= (x + 1)^2
    \end{split}
    \label{eq:split}
\end{equation}


# Sources 