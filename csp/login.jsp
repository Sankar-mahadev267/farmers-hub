<%@page import="java.sql.*"%>
<%@include file="connection.jsp"%>
<%
String usr=request.getParameter("u2");
String pwd=request.getParameter("p2");
PreparedStatement p = null;
ResultSet rs = null;
try{
    p = con.prepareStatement("select * from farmer where username=? and password=?");
    p.setString(1,usr);
    p.setString(2,pwd);
    rs = p.executeQuery();
    if(rs.next()){
        String mail=rs.getString(2);
        session.setAttribute("usr",usr);
        session.setAttribute("mail",mail);
        response.sendRedirect("home.jsp?log=yes");  
    }
    else{
        response.sendRedirect("fail.jsp");
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
        if(rs != null)
            rs.close();
    }
    catch(Exception e){
        out.println("<script>alert('database error..."+e.getMessage()+"');</script>");                }
}%>