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

<div>
<div class="d-flex justify-content-between"><h1>Edit an expense:</h1> <a href="/expenses">Go Back</a>
</div>

<form:form action="/expenses/edit/${expense.id}" method="post" modelAttribute="expense">
  <input type="hidden" name="_method" value="put">
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
		<input type="submit" value="Edit"/>
	</div>
	
	

</form:form>
</div>	

</body>
</html>