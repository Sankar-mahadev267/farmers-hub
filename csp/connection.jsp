<%@page import="java.sql.*"%>
<%
Connection con = null;
try{
    Class.forName("oracle.jdbc.driver.OracleDriver");
    con=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe","system","sankar");
}
catch(Exception e){
    out.println("<script>alert('database error..."+e.getMessage()+"');</script>");
}
%>