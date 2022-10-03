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
<body class="container-sm">

<h1>Here's Your Omikuji</h1>
<div class="bg-info border border-dark">
<span>In <c:out value="${years }" /> years, you will live in <c:out value="${city }" /> with <c:out value="${person }" /> 
as your room mate, <c:out value="${hobby }" /> for a living. The next time you see a <c:out value="${living }" />, you will have good luck.
Also, <c:out value="${kindness }" />
</span>
</div>
<a href="/omikuji">Go Back</a>
</body>
</html>