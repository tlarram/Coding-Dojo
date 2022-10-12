<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<meta charset="ISO-8859-1">
<title>Project Info</title>
</head>
<body class="container">
<div class="d-flex justify-content-between">
<h1>Welcome, ${firstName }!</h1>
<p><a class="btn btn-danger" href="/logout">Log Out</a>
</div>
<div class="d-flex justify-content-between">
<h3>All Projects</h3> <a class="btn btn secondary" href="projects/new">+ New Project</a>
</div>
<table>

    <thead>
        <tr>
            <th>Project</th>
            <th>Team Lead</th>
            <th>Due Date</th>
            <th>Actions</th>
        </tr>
    <c:forEach var="project" items="${unassignedProjects}">
              <tr>
                <td><a href="/projects/${project.id}"><c:out value="${project.title}"/></a></td>
                <td><c:out value="${project.lead.firstName}"/></td>
                <td><fmt:formatDate value="${project.dueDate}" pattern="MMMM dd" /></td>
                <td>
                  <c:choose>
                    <c:when test="${project.lead == user}">
                      <div class="d-flex">
                        <a class="btn btn-success me-3" href="/projects/edit/${project.id}">Edit</a>
                        <form action="projects/delete/${project.id}" method="post">
                          <input type="hidden" name="_method" value="delete">
                          <input type="submit" value="Delete" class="btn btn-danger">
                        </form>
                      </div>
                    </c:when>
                    <c:otherwise>
                      <c:if test="${!project.users.contains(user)}">
                        <form action="/projects/join/${project.id}" method="post">
                          <input type="hidden" name="_method" value="put">
                          <input type="submit" value="Join Team" class="btn btn-warning">
                        </form>
                      </c:if>
                    </c:otherwise>
                  </c:choose>
                </td>
              </tr>
            </c:forEach>
          </table>
<br>
<h4>Your Projects</h4>
<table>
    <thead> 
    	<tr>
    		<th>Project</th>
    		<th>Team Lead</th>
    		<th>Due Date</th>
    		<th>Actions</th>
    	</tr>
    </thead>
    <tbody>
    	<c:forEach var="project" items="${assignedProjects}">
              <tr>
                <td><a href="/projects/${project.id}"><c:out value="${project.title}"/></a></td>
                <td><c:out value="${project.lead.firstName}"/></td>
                <td><fmt:formatDate value="${project.dueDate}" pattern="MMMM dd" /></td>
                <td>
                  <form action="/projects/leave/${project.id}" method="post">
                    <input type="hidden" name="_method" value="put">
                    <input type="submit" value="Leave Team" class="btn btn-warning">
                  </form>
                </td>
              </tr>
            </c:forEach>
    </tbody>
</table>
</body>
</html>