<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>

<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<div class="container">
	<h1>Date</h1>
	<h1 class="text-success"><c:out value="${dateString}"/></h1>
	 <a href="/">Home</a>
		
</div>
<script type="text/javascript" src="/js/app.js"></script>
</body>
</html>

		