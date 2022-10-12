<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<meta charset="ISO-8859-1">
<title>Tasks</title>
</head>
<body>
<h1>Project: <c:out value="${project.title}"></c:out></h1>
<h3>Project Lead: <c:out value="${project.lead.firstName}"></c:out></h3>

<form:form action="/projects/${project.id }/tasks" method="post" modelAttribute="task">
  
	

	
	
	<div>
		<form:label path="name">Add a task ticket for this team: </form:label><br />
		<form:textarea style="width:250px;"  path="name"/>
		<form:errors path="name" class="text-danger"/>
	</div>
	
	
	<div>
		<input type="submit" value="Submit"/>
	</div>
	
</form:form>
    	<c:forEach var="task" items="${tasks}">
         <h4>Added by <c:out value="${task.creator.firstName}"></c:out> at <fmt:formatDate value="${task.createdAt}" pattern="h:mm a MMMM dd" />:</h4>
        	<p><c:out value="${task.name}"></c:out></p>
		
         </c:forEach>
        
        

</body>
</html>