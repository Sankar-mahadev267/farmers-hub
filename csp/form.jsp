<%@page import="java.sql.*"%>
<%@include file="connection.jsp"%>
<%
String fname=request.getParameter("nam");
String sellorbuy=request.getParameter("sb");
String crop=request.getParameter("crop");
String quantity=request.getParameter("qt");
String mobile=request.getParameter("ph");
String address=request.getParameter("adrs");
String username=(String)session.getAttribute("usr");
PreparedStatement p = null;
try{
    p =con.prepareStatement("insert into sellbuy values(?,?,?,?,?,?,?)");
    p.setString(1,fname);
    p.setString(2,sellorbuy);
    p.setString(3,crop);
    p.setString(4,quantity);
    p.setString(5,mobile);
    p.setString(6,address);
    p.setString(7,username);
    int k=p.executeUpdate();
    if(k>0){
        response.sendRedirect("sellers.jsp?res=yes");
    }
    else{
        response.sendRedirect("sellers.jsp");
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