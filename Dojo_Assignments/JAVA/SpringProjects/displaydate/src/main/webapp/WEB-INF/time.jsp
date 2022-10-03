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
	<h1>Time</h1>
	<h1 class="text-primary"><c:out value="${timeString}"/></h1>
	<a href="/">Home</a>
		
</div>
<script type="text/javascript" src="/js/app2.js"></script>
</body>
</html>

		