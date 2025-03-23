<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="icon.png">
    <title>Farmer's hub</title>
    <link rel="stylesheet" href="style1.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"> 
</head>
<body>
    <div class="navbar">
        <div class="logo"><img src="logo.jpg" alt="Farmer's hub"></div>
        <div class="linebar on-mobile">
            <ul>
                <li><a href="home.jsp">home</a></li>
                <li class="services"><a class="nav-page" href="#">services &#x25BE</a>
                    <div class="dropdown">
                        <ul>
                            <li><a href="schemes.jsp">schemes</a></li>
                            <li><a class="nav-page" href="#">prices</a></li>
                            <li><a href="pests.jsp">pests</a></li>
                        </ul>
                    </div>
                </li>
                <li><a href="about.jsp">About</a></li>
                <li><a href="contact.jsp">contact</a></li>
            </ul>
            <div class="profile"><i class="bi bi-person-fill" id="pro-open"></i></a></div>
        </div>

        <i class="bi bi-list" id="list"></i>

    </div>
    <div class="sidebar">
        <ul>
            <li><i class="bi bi-x" id="close"></i></li>
            <li><a href="home.jsp">home</a></li>
            <li><a href="schemes.jsp">schemes</a></li>
            <li><a class="nav-page" href="#">prices</a></li>
            <li><a href="pests.jsp">pests</a></li>
            <li><a href="about.jsp">About</a></li>
            <li><a href="contact.jsp">contact</a></li>
            <li id="pro-open1"><a>Profile</a></li>
        </ul>
    </div>
    <br><br><br>
    <h1 style="background: white;padding: 20px;">Prices</h1>

    <div class="d10">
        <priceform>
            <select id="crop" onchange="changemarket()">
                <option>Select Crop</option>
                <option>Black Gram(Minumu)</option>
                <option>Maize(Mokka jonna)</option>
                <option>Paddy(Dhan)</option>
            </select>
            <select>
                <option>Select State</option>
                <option>Andhra Pradesh</option>
            </select>
            <select id="market">
                <option>Select Market</option>
            </select>
            <button type="submit" onclick="changeprice()">Price</button>
        </priceform>
        <div class="d10-1">
            <div class="price-desc">
                <p>As per the present market prices, <b><crop>Black Gram(Minumu)</crop></b> price at <b><market>Tenali</market></b> market</p>
                <table>
                    <tr><td><b>Min : </b></td><td id="min"><b>&#8377; <price>9100</price>.00 / Quintal</b></td></tr>
                    <tr><td><b>Avg : </b></td><td id="avg"><b>&#8377; <price>9200</price>.00 / Quintal</b></td></tr>
                    <tr><td><b>Max : </b></td><td id="max"><b>&#8377; <price>9300</price>.00 / Quintal</b></td></tr>
                </table>
            </div>
            <div class="sell-buy">
                <p>Talk to the dealers and sell your crop as per your requirement an the dealer requirement</p>
                <a href="sellers.jsp"><button>&#8377; Sell/Buy</button></a>
            </div>
        </div>
    </div>
    
    <div class="d5">
        <div class="contact">
            <div>
                <p>Contact us if you have any queries and know the deatails about government schemes and accurate mandi prices. Exact pesticides or insecticides for the diceases of th crop</p>
                <a href="contact.jsp"><button>Contact us</button></a>
            </div>
            <img src="cartoon1.png" alt="contact us">
        </div>
        <h1 style="background: white;padding: 20px;">Feedback</h1>
        <div class="contact">
            <img src="feedback.webp" alt="feedback">
            <form action="feedback.jsp" method="post">
                <input name="nam" type="text" placeholder="Enter name" required><br>
                <textarea name="feedback" rows="5" cols="70" placeholder="Ur Feedback" required></textarea>
                <input type="hidden" name="redirecturl" value="prices.jsp">
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
    <!-- <h2 style="background: rgba(0,0,0,0.7);padding: 20px;color: white;">what our users say about us</h2>
    <div class="d6">
        <div class="roll">
            <div class="feedback-card">
                <div class="img"><img src="farmer1.jpg" alt=""></div>
                <p>I'm impressed with the website's design and layout. It's easy to navigate and find the information I need. I've learned a lot about crop management and pest control.
                </p>
            </div>
            <div class="feedback-card">
                <div class="img"><img src="farmer2.avif" alt=""></div>
                <p>The website has really helped me improve my farming techniques.The community section is also great for connecting with other farmers.</p>
            </div>
            <div class="feedback-card">
                <div class="img"><img src="farmer3.jpg" alt=""></div>
                <p>I'm not very tech-savvy, but the website is easy to use even for me. The language is simple and clear, and the information is relevant to my needs.The website is a great resource for farmers.</p>
            </div>
            <div class="feedback-card">
                <div class="img"><img src="farmer4.webp" alt=""></div>
                <p>I've been using the website for a few months now, and I'm really impressed.The website is a great resource for farmers who want to improve their farming practices.</p>
            </div>
            <div class="feedback-card">
                <div class="img"><img src="farmer5.jpg" alt=""></div>
                <p>"I was surprised by the wealth of information available on the website. I've learned a lot about agricultural marketing and how to increase my income.</p>
            </div>
        </div>
    </div> -->

    <%@page import="java.sql.*"%>
    <%@include file="connection.jsp"%>
    <%
    String usr=(String)session.getAttribute("usr");
    String mail=(String)session.getAttribute("mail");
    PreparedStatement p1 = null;
    ResultSet rs1 = null;
    PreparedStatement p2 = null;
    ResultSet rs2 = null;
    PreparedStatement p3 = null;
    ResultSet rs3 = null;

    %>
    <div class="profile-box">
        <div class="close"><b>Profile</b><i class="bi bi-x" id="pro-close"></i></div>
        <div class="photo"><i class="bi bi-person-fill"></i></div>
        <p><b>Username : </b><%=usr%></p>
        <p><b>E-mail &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp: </b><%=mail%></p>
        <div class="pi" id="fb-q">My feedback & queries</div>
        <div class="pi" id="post">My post</div>
        <r id="logout">Logout</r>
    </div>  
    <div class="fbq">
        <i class="bi bi-arrow-left" id="fb-close"></i>
        <div class="fbroll">
            <div class="fb">
                <h3>Feedback</h3>
                <ul style="list-style: none;">
                <%
                try{
                    p1=con.prepareStatement("select feedback from farmerfeedback where username=?");
                    p1.setString(1,usr);
                    rs1= p1.executeQuery();
                    if(rs1.next()){
                        do{%>
                            <li><%=rs1.getString(1)%></li>
                      <%}while(rs1.next());
                    }
                    else{%>
                        <li>No Feedback</li>
                  <%}%>
               
                </ul>
            </div>
            <div class="qr">
                <h3>Queries</h3>
                <ul style="list-style: none;">
                <%
                    p2=con.prepareStatement("select contactinfo from contactform where username=?");
                    p2.setString(1,usr);
                    rs2= p2.executeQuery();
                    if(rs2.next()){
                        do{%>
                            <li><%=rs2.getString(1)%></li>
                      <%}while(rs2.next());
                    }
                    else{%>
                        <li>No queries</li>
                  <%}%>
                
                </ul>
            </div>
        </div>
    </div> 
    <div class="post-box">
        <i class="bi bi-arrow-left" id="pb-close"></i>
        <div class="pbroll">
            <%
               p3 = con.prepareStatement("select * from sellbuy where username=?");
               p3.setString(1,usr);
               rs3 = p3.executeQuery();
               if(rs3.next()){
                   do{%>
                       <div class="post-card">
                           <img src="<%=rs3.getString(3)%>.webp" alt="crop">
                           <p><%=rs3.getString(4)%> Quintals</p>
                           <p><b>Name : </b><%=rs3.getString(1)%></p>
                           <p><b>Ph.no : </b><%=rs3.getString(5)%></p>
                           <p><b>Address : </b><%=rs3.getString(6)%></p>
                           <p><b><%=rs3.getString(2)%></b></p>
                       </div>       
                   
               <%  }while(rs3.next());
               }
               else{%>
                   <h3 align="center" style="padding: 20px;">No Posts</h3>
             <%}
               
            }
            catch(Exception e){
                out.println("<script>alert('Error..."+e.getMessage()+"');</script>");
            } 
            finally{
                try{
                    if(con != null)
                        con.close();
                    if(p1 != null)
                        p1.close();
                    if(rs1 != null)
                        rs1.close();
                    if(p2 != null)
                        p2.close();
                    if(rs2 != null)
                        rs2.close();
                    if(p3 != null)
                        p3.close();
                    if(rs3 != null)
                        rs3.close();
                }
                catch(Exception e){
                    out.println("<script>alert('database error..."+e.getMessage()+"');</script>");                }
            }%>
        </div>
    </div>    
    <div class="logout-box">
        <i class="bi bi-send-check-fill"></i>&nbsp&nbsp&nbsp <b>Confirmation</b>
        <p>Do you want to Logout</p>
        <div>
            <a href="home.html"><button style="background: none;color: black;">yes</button></a>
            <button id="logout-close">stay</button>
        </div>
    </div>
    
    <%
    String res = null;
    res=request.getParameter("res");
    if(res != null){%>
        <div class="success">
            <b>Submitted Successfully &nbsp;&nbsp;&nbsp;</b><i class="bi bi-x" onclick="suc()"></i>
        </div>
  <%}%>


    <div class="footer">
        <ul class="foot">
            <li><a href="home.jsp">home</a></li>
            <li><a href="schemes.jsp">schemes</a></li>
            <li><a class="nav-page" href="#">prices</a></li>
            <li><a href="pests.jsp">pests</a></li>
            <li><a href="about.jsp">about</a></li>
            <li><a href="contact.jsp">contact</a></li>
        </ul>
        <div class="footer-mid"><div class="line"></div></div>
        <div class="social">
            <i class="bi bi-facebook"></i>
            <i class="bi bi-instagram"></i>
            <i class="bi bi-youtube"></i>
        </div>
    </div>
    <div class="no" id="google_translate_element"></div>
    <script type="text/javascript">
        function googleTranslateElementInit() {
            new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'en,te',
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE
            }, 'google_translate_element');
        }
    </script>
    <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
    <script src="script.js"></script>
</body>    
</html>