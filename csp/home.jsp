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
        <div class="logo"><img src="logo.jpg" alt="Travel and tour"></div>
        <div class="linebar on-mobile">
            <ul>
                <li><a class="nav-page" href="#">home</a></li>
                <li class="services"><a href="#">services &#x25BE</a>
                    <div class="dropdown">
                        <ul>
                            <li><a href="schemes.jsp">schemes</a></li>
                            <li><a href="prices.jsp">prices</a></li>
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
            <li><a class="nav-page" href="#">home</a></li>
            <li><a href="schemes.jsp">schemes</a></li>
            <li><a href="prices.jsp">prices</a></li>
            <li><a href="pests.jsp">pests</a></li>
            <li><a href="about.jsp">About</a></li>
            <li><a href="contact.jsp">contact</a></li>
            <li id="pro-open1"><a>Profile</a></li>            
        </ul>
    </div>

    <div class="d1">
        <div class="banner">
            <h1>your own guide</h1>
            <p>Stay updated on government schemes, mandi prices and agricultural news</p><br>
        </div>
    </div>
    <div class="d2">
        <a href="prices.jsp">
            <div class="p">
                <i class="bi bi-currency-rupee"></i>
                <h3 align="center">Prices</h3>
                <p>Know the actual prices of the paddy, black gram and any other crop.Connect with dealers or farmers to sell or buy</p>
            </div>
        </a>
        <a href="schemes.jsp">
            <div class="s">
                <i class="bi bi-columns-gap"></i>
                <h3 align="center">Schemes</h3>
                <p>Important agricultural schemes for the farmers that are provided by the government</p>
            </div>
        </a>
    </div>
    
    <h1 style="background: white;padding: 20px;">Pesticides</h1>
    <div class="d3">
        <div class="roll">
            <div class="pest-card" id="coragen1">
                <div class="img"><img src="images/coragen-fmc.png" alt="coragen"></div>
                <p>Coragen Insecticide</p>
                <p class="company">FMC</p>
            </div>
            <div class="pest-card" id="tafgor1">
                <div class="img"><img src="images/tafgor-rallis.png" alt="pest"></div>
                <p>Tafgor Insecticide</p>
                <p class="company">Rallis</p>
            </div>
            <div class="pest-card" id="jump1">
                <div class="img"><img src="images/jump-bayer.png" alt="pest"></div>
                <p>Jump Insecticide</p>
                <p class="company">Bayer</p>
            </div>
            <div class="pest-card" id="simodis1">
                <div class="img"><img src="images/simodis-syngenta.jpg" alt="pest"></div>
                <p>Simodis Insecticide</p>
                <p class="company">Syngenta</p>
            </div>
            <div class="pest-card" id="em11">
                <div class="img"><img src="images/em-1-dhanuka.png" alt="pest"></div>
                <p>EM-1 Insecticide</p>
                <p class="company">Dhanuka</p>
            </div>
        </div>
        <div class="more"><a href="pests.jsp"><button>More</button></a></div>
    </div>
    <h1 style="background: white;padding: 20px;">Latest Schemes</h1>
    <div class="d4">
        <div class="scheme-card">
            <img src="pmksy.jpg" alt="image not found">
            <p>Pradhan Mantri Krishi Sinchayee Yojana (PMKSY)</p>
            <a href="https://www.myscheme.gov.in/schemes/pmksypdmc" target="f"><button>Learn more</button></a>
        </div>
        <div class="scheme-card">
            <img src="shc.jpg" alt="image not found">
            <p>RKVY Soil Health and Fertility - Soil Health Card Scheme</p>
            <a href="https://www.myscheme.gov.in/schemes/rkvyshfshc" target="f"><button>Learn more</button></a>
        </div>
        <div class="scheme-card">
            <img src="rakvy.jpg" alt="image not found">
            <p>Rashtriya Krishi Vikas Yojana (RKVY)</p>
            <a href="https://www.myscheme.gov.in/schemes/rkvy" target="f"><button>Learn more</button></a>
        </div>
        <div class="scheme-card">
            <img src="nais.jpg" alt="image not found">
            <p>National Agriculture Insurance Scheme (NAIS)</p>
            <a href="https://www.myscheme.gov.in/schemes/nais" target="f"><button>Learn more</button></a>
        </div>
    </div>
    <div class="d12">
        <div class="d13">
            <div class="weather-info">
                <h1>Weather Today</h1>
                <p>Stay ahead of the weather with instant updates on temperature, humidity, wind speed, and more.</p>
            </div>
            <div>
                <h1 class="title">Weather Today</h1>
                <div class="weather">
                    <div class="search">
                        <input type="search" placeholder="Enter city name">
                        <button><img src="search icon.png" alt="search"></button>
                    </div>
                    <div class="correct">
                        <div class="result">
                            <img class="icon" src="clear.png" alt="weather-icon">
                            <h1 class="temp">20°c</h1>
                            <h2 class="city">Bengalore</h2>
                        </div>
                        <div class="wh">
                            <div class="wind">
                                <img src="wind.png" alt="">
                                <div>
                                    <h1 class="speed">26 km/h</h1>
                                    <h1>wind</h1>
                                </div>
                            </div>
                            <div class="humidity">
                                <img src="humidity.png" alt="">
                                <div>
                                    <h1 class="percent">26%</h1>
                                    <h1>humidity</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div><h2 class="error">Invalid city name</h2></div>
                </div>
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
                <input type="hidden" name="redirecturl" value="home.jsp">
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

    <div class="d8">
        <div class="flex">
            <div class="wrapper">
                <div class="pest-info1">
                    <div class="img"><img src="images/em-1-dhanuka.png" alt="pest"></div>
                    <h1 align="center">EM-1 Insecticide</h1>
                    <h2 align="center" class="company">dhanuka</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum facere culpa in sequi et quam animi amet quae cum eius officiis enim, inventore quis id cupiditate accusantium, natus, alias autem quas nihil.</p>
                    <i class="bi bi-x" id="close-info1"></i>
                </div>
            </div>
        </div>
    </div> 

    
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
            <b>Submitted Successfully &nbsp;&nbsp;&nbsp;&nbsp;</b><i class="bi bi-x" onclick="suc()"></i>
        </div>
  <%}%>
    <%
    String log = null;
    log=request.getParameter("log");
    if(log != null){%>
        <div class="success1">
            <b>Login Successfull &nbsp;&nbsp;&nbsp;&nbsp</b><i class="bi bi-x" onclick="suc1()"></i>
        </div>
  <%}%>
   <%
   String reg = null;
   reg=request.getParameter("reg");
   if(reg != null){%>
       <div class="success2">
           <b>Registered Successfull &nbsp;&nbsp;&nbsp;&nbsp;</b><i class="bi bi-x" onclick="suc2()"></i>
       </div>
  <%}%>

    <div class="footer">
        <ul class="foot">
            <li><a class="nav-page" href="#">home</a></li>
            <li><a href="schemes.jsp">schemes</a></li>
            <li><a href="prices.jsp">prices</a></li>
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
    <script src="home.js"></script>
    <script src="weather.js"></script>
</body>
</html>