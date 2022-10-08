<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<meta charset="ISO-8859-1">
<title>Expenses</title>
</head>
<body>

<h1>Expenses</h1>
<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Expense</th>
            <th>Vendor</th>
            <th>Amount</th>
            <th>Edit</th>
        </tr>
    </thead>
    <tbody>
         <!-- loop over all the books to show the details as in the wireframe! -->
         <c:forEach var="expense" items="${expenses}">
         <tr>
         <td><c:out value="${expense.id }"></c:out></td>
         <td><a href="/expenses/${expense.id}"><c:out value="${expense.expenseName }"></c:out></a></td>
		 <td><c:out value="${expense.vendor}"></c:out></td>
		 <td><c:out value="${expense.amount}"></c:out></td>
		 <td><a href="/expenses/edit/${expense.id}">Edit</a><td>
		 <td>
		 <form action="/expenses/delete/${expense.id }" method="POST">
		 <input type="hidden" name="_method" value="delete">
		 <button class="btn btn-danger" type="submit">Delete</button>
		 </form>
		 
		 </td>
         </tr>
         </c:forEach>
    </tbody>
</table>
<br>
<div>
<h1>Add an expense:</h1>
<form:form action="/expenses" method="post" modelAttribute="expense">

	<div>
		<form:label path="expenseName">Expense Name: </form:label><br />
		<form:errors path="expenseName" class="text-danger"/>
		<form:input style="width:250px;" path="expenseName"/>
	</div>

	<div>
		<form:label path="vendor">Vendor: </form:label><br />
		<form:errors path="vendor" class="text-danger"/>
		<form:input style="width:250px;" path="vendor"/>
	</div>
	
	<div>
		<form:label path="amount">Amount: </form:label><br />
		<form:errors path="amount" class="text-danger"/>
		<form:input style="width:250px;" type="double" path="amount"/>
	</div>
	
	<div>
		<form:label path="description">Description: </form:label><br />
		<form:errors path="description" class="text-danger"/>
		<form:textarea style="width:250px;" rows="3" path="description"/>
	</div>
	
	<div>
		<input type="submit" value="Submit"/>
	</div>
	
	

</form:form>
</div>	

</body>
</html>