<%@page import="java.sql.*"%>
<%@include file="connection.jsp"%>
<%
String name=request.getParameter("nam");
String mobile=request.getParameter("mob");
String contactinfo=request.getParameter("contactinfo");
String username=(String)session.getAttribute("usr");
PreparedStatement p= null;
try{
    p=con.prepareStatement("insert into contactform values(?,?,?,?)");
    p.setString(1,name);
    p.setString(2,mobile);
    p.setString(3,contactinfo);
    p.setString(4,username);
    int k=p.executeUpdate();
    if(k>0){
        response.sendRedirect("contact.jsp?res=yes");
    }
    else{
        response.sendRedirect("contact.jsp");
    }
   
}
catch(Exception e){
    out.println("<script>alert('Error..."+e.getMessage()+"');</script>");
}
finally{
    try{
        if(con != null)
            con.close();
        if(p != null)
            p.close();
    }
    catch(Exception e){
        out.println("<script>alert('database error..."+e.getMessage()+"');</script>");                }
}%>