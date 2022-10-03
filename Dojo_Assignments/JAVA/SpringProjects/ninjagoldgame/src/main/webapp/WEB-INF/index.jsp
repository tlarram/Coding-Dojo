<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<meta charset="ISO-8859-1">
<title>Ninja Gold</title>
</head>
<body>
<div class="container">
		<h1>Ninja Gold</h1>
		<h2>Your Gold: <c:out value="${gold}"/></h2>
		<a href="/reset" class="button">Reset</a>
		<div class="d-flex">

	<table>

	<tr>
	  <td>
	  	<h3>Farm</h3>
		<p>(earns 10-20 gold)</p>
		<form action="/gold" method="post"><input class="button" type="submit" name="farm" value="Find Gold!"/></form>
	  </td>
	  <td>
	  	<h3>Cave</h3>
		<p>(earns 5-10 gold)</p>
		<form action="/gold" method="post"><input class="button" type="submit" name="cave" value="Find Gold!"/></form>
	  </td>
	  <td>
	  	<h3>House</h3>
		<p>(earns 2-5 gold)</p>
		<form action="/gold" method="post"><input class="button" type="submit" name="house" value="Find Gold!"/></form>
	  </td>
	  <td>
	  	<h3>Quest</h3>
		<p>(earns/takes 0-50 gold)</p>
		<form action="/gold" method="post"><input class="button" type="submit" name="quest" value="Find Gold!"/></form>
	  </td>
	  <td>
	  	<h3>Spa</h3>
		<p>(takes 5-20 gold)</p>
		<form action="/gold" method="post"><input class="button" type="submit" name="spa" value="Visit Spa"/></form>
	  </td>
	</tr>

</table>

		</div>
				<h2>Activities:</h2>
<br>
<iframe src="/activities/" title="Activities Iframe"></iframe>
		</div>


</body>
</html>