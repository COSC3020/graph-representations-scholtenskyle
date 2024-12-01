# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.


Both of the functions written have a runtime complexity of $$O(n^2)$$. This is because both functions are relatively simple, with only nested loops having the ability to actually affect the runtime. These nested loops of course have the time complexity of $$n^2$$. In both instances, they are dependent on the number of vertices within the graph.

https://www.geeksforgeeks.org/convert-adjacency-matrix-to-adjacency-list-representation-of-graph/

I used the source above to understand more about what the question was asking, and what the code was expected to do.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
