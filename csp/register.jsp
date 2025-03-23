<%@page import="java.sql.*"%>
<%@include file="connection.jsp"%>
<%
String usr=request.getParameter("u1");
String mail=request.getParameter("m");
String pwd=request.getParameter("p1");
PreparedStatement p = null;
try{
    p=con.prepareStatement("insert into farmer values(?,?,?)");
    p.setString(1,usr);
    p.setString(2,mail);
    p.setString(3,pwd);
    int k=p.executeUpdate();
    if(k>0){
        session.setAttribute("usr",usr);
        session.setAttribute("mail",mail);
        response.sendRedirect("home.jsp?reg=yes");
    }
    else{
        response.sendRedirect("register.html");
        out.println("<script>alert('Register unsuccessful..');</script>");
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