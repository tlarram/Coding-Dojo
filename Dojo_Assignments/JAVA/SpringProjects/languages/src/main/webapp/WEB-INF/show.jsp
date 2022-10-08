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
<div class="d-flex justify-content-between"><h1>Language Details</h1> <a href="/languages">Dashboard</a>
</div>
<p>Language: <c:out value="${language.name }"></c:out></p>
<p>Creator: <c:out value="${language.creator }"></c:out></p>
<p>Version: <c:out value="${language.version}"></c:out></p>

		

</body>
</html>