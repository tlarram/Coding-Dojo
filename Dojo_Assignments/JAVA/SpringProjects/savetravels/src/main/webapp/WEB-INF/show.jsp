<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<meta charset="ISO-8859-1">
<title>Expense Info</title>
</head>
<body>
<div class="d-flex justify-content-between"><h1>Expense Details</h1> <a href="/expenses">Go Back</a>
</div>
<p>Item: <c:out value="${expense.expenseName }"></c:out></p>
<p>Description: <c:out value="${expense.description }"></c:out></p>
<p>Vendor: <c:out value="${expense.vendor}"></c:out></p>
<p>Amount Spent: <c:out value="${expense.amount }"></c:out></p>
		

</body>
</html>