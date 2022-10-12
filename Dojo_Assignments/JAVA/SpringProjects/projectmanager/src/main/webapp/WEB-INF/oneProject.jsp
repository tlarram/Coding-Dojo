<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<meta charset="ISO-8859-1">
<title>About Project</title>
</head>
<body>
<h1>Project Details</h1>

<h3>Project: <c:out value="${project.title }"></c:out></h3>
<h3>Project Description: <c:out value="${project.description }"></c:out></h3>
<h3>Due Date <c:out value="${project.dueDate}"></c:out></h3>  
    
        
         
      
<a href="/projects/${project.id }/tasks">See Tasks</a>
         
<c:choose>
		<c:when test="${userId.equals(project.lead.id) }">
		<form action="/projects/delete/${project.id }" method="POST">
		 <input type="hidden" name="_method" value="delete">
		 <button class="btn btn-danger" type="submit">Delete</button>
		 </form>
		</c:when>
		<c:otherwise> 
		</c:otherwise>
		
		</c:choose>   


</body>
</html>