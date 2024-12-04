const problemData = [
    {
        title: "Hello World Program",
        description: "Write a Python program that prints 'Hello, World!'.",
        sampleInput: "N/A",
        sampleOutput: "Hello, World!",
        difficulty: "Easy",
        tags: ["Basics", "Python"],
        solution: `# Write your Python code here 
        print("Hello, World!")`
    },
    {
        title: "Palindrome Checker",
        description: "Check if a given string is a palindrome (reads the same forwards and backwards).",
        sampleInput: "madam",
        sampleOutput: "True",
        difficulty: "Easy",
        tags: ["String", "Python"],
        solution: `# Write your Python code here
        def is_palindrome(s):
    return s == s[::-1]


print(is_palindrome('madam'))  `
    },
    {
        title: "Linear Regression Numerical Problem",
        description: "Implement a linear regression model to fit given data points and predict outcomes.",
        sampleInput: "X = [1, 2, 3, 4], Y = [2.1, 4.3, 6.2, 8.5]",
        sampleOutput: "Predicted Y for input [5] should be ~10.7",
        difficulty: "Easy",
        tags: ["Regression", "ML"],
        solution: `# Write your Python code here
        import numpy as np
from sklearn.linear_model import LinearRegression


X = np.array([1, 2, 3, 4]).reshape(-1, 1)
y = np.array([2.1, 4.3, 6.2, 8.5])


model = LinearRegression().fit(X, y)


prediction = model.predict(np.array([[5]]))
print('Prediction for input [5]:', prediction[0])`
    },
    {
        title: "K-Means Clustering for Numerical Data",
        description: "Apply k-means clustering on a numerical dataset and output the centroids.",
        sampleInput: "Dataset = [[1.5, 2.5], [2.1, 3.4], [5.8, 6.1], [8.7, 8.9]]",
        sampleOutput: "Centroids for the clusters",
        difficulty: "Medium",
        tags: ["Clustering", "ML"],
        solution: `# Write your Python code here
        from sklearn.cluster import KMeans
import numpy as np


X = np.array([[1.5, 2.5], [2.1, 3.4], [5.8, 6.1], [8.7, 8.9]])


kmeans = KMeans(n_clusters=2, random_state=42).fit(X)


print('Centroids:', kmeans.cluster_centers_)
print('Labels:', kmeans.labels_)`
    },
    {
        title: "Decision Tree Classifier with Numerical Data",
        description: "Create a decision tree classifier to predict outcomes based on numerical features.",
        sampleInput: "Features = [[1, 2], [2, 3], [3, 4], [4, 5]], Labels = [0, 1, 0, 1]",
        sampleOutput: "Predictions and tree visualization",
        difficulty: "Medium",
        tags: ["Classification", "ML"],
        solution: `# Write your Python code here
        from sklearn import tree
import numpy as np


X = np.array([[1, 2], [2, 3], [3, 4], [4, 5]])
y = np.array([0, 1, 0, 1])


clf = tree.DecisionTreeClassifier()
clf = clf.fit(X, y)

print('Prediction for [2, 2]:', clf.predict([[2, 2]]))


import matplotlib.pyplot as plt
plt.figure(figsize=(12, 8))
tree.plot_tree(clf, filled=True)
plt.show()`
    }
];
