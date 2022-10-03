<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<meta charset="ISO-8859-1">
<title>Counter</title>
</head>
<body>
<p> You have visited <a href="http://localhost:8080/server">Your Server</a> <c:out value="${count }" /> times. <p>
<a href="http://localhost:8080/server">Take another visit?</a>
</body>
</html>