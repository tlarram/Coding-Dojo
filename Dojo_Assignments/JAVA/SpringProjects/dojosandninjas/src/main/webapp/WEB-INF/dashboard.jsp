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
<h1><c:out value="${dojo.dojo }"></c:out></h1>
<table>

    <thead>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
        </tr>
    </thead>
    <tbody>
         <!-- loop over the dojo to show the ninjas as in the wireframe! -->
         <c:forEach var="ninja" items="${dojo.ninjas}">
         <tr>
         <td><c:out value="${ninja.firstName }"></c:out></td>
		
		 <td><c:out value="${ninja.lastName}"></c:out></td>
		 <td><c:out value="${ninja.age}"></c:out></td>
         </tr>
         </c:forEach>
    </tbody>
</table>
</body>
</html>