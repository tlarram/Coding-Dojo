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
<div class="container-sm ">
<h1>Send an Omikuji</h1>
<form class="col-sm" method="POST" action="/submit" >
<label>Pick a number between 5 and 25</label>
<input class="form-control col-auto" type="number" name="years">
<label>Enter the name of any city</label>
<input class="form-control col-auto" type="text" name="city">
<label>Enter the name of any real person</label>
<input class="form-control" type="text" name="person">
<label>Enter professional endeavor or hobby</label>
<input class="form-control" type="text" name="hobby">
<label>Enter any type of living thing</label>
<input class="form-control" type="text" name="living">
<label>Say something nice to someone</label>
<textarea class="form-control" name="kindness"></textarea>
<p>Send and show a friend<P>
<button class="btn btn-success">Submit</button>
</form>
</div>
</body>
</html>