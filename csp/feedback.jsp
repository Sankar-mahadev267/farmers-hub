<%@page import="java.sql.*"%>
<%@include file="connection.jsp"%>
<%
String name=request.getParameter("nam");
String feedback=request.getParameter("feedback");
String redirecturl=request.getParameter("redirecturl");
String username=(String)session.getAttribute("usr");
PreparedStatement p = null;
try{
    p =con.prepareStatement("insert into farmerfeedback values(?,?,?)");
    p.setString(1,name);
    p.setString(2,feedback);
    p.setString(3,username);
    int k=p.executeUpdate();
    if(k>0){
        response.sendRedirect(redirecturl+"?res=yes");
    }
    else{
        response.sendRedirect(redirecturl);
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