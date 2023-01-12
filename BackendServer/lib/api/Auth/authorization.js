var express = require('express');
var router = express.Router();

router.get("/", (req, res) => {
    const username = req.body.username
    const account_number = req.body.account_number
    const balance = req.body.balance
    const rest = req.body.rest
    const is_admin = req.body.is_admin

    const data = "<!DOCTYPE html>\n" +
        "<html lang=\"en\">\n" +
        "\n" +
        "<head>\n" +
        "\n" +
        "    <meta charset=\"utf-8\">\n" +
        "    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n" +
        "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n" +
        "    <meta name=\"description\" content=\"\">\n" +
        "    <meta name=\"author\" content=\"\">\n" +
        "\n" +
        "    <title>EGG MOney</title>\n" +
        "\n" +
        "    <!-- Custom fonts for this template-->\n" +
        "    <link href=\"vendor/fontawesome-free/css/all.min.css\" rel=\"stylesheet\" type=\"text/css\">\n" +
        "    <link\n" +
        "        href=\"https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i\"\n" +
        "        rel=\"stylesheet\">\n" +
        "\n" +
        "    <!-- Custom styles for this template-->\n" +
        "    <link href=\"css/sb-admin-2.min.css\" rel=\"stylesheet\">\n" +
        "\n" +
        "</head>\n" +
        "\n" +
        "<body id=\"page-top\">\n" +
        "\n" +
        "    <!-- Page Wrapper -->\n" +
        "    <div id=\"wrapper\">\n" +
        "\n" +
        "        <!-- 사이드바 -->\n" +
        "        <ul class=\"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion\" id=\"accordionSidebar\">\n" +
        "\n" +
        "            <!-- 맨왼쪽 맨위 -->\n" +
        "            <a class=\"sidebar-brand d-flex align-items-center justify-content-center\" href=\"/\">\n" +
        "                <div class=\"sidebar-brand-icon rotate-n-15\">\n" +
        "                    <i class=\"fas fa-laugh-wink\"></i>\n" +
        "                </div>\n" +
        "                <div class=\"sidebar-brand-text mx-3\">EGG MOney</div>\n" +
        "            </a>\n" +
        "\n" +
        "            <!-- Divider -->\n" +
        "            <hr class=\"sidebar-divider my-0\">\n" +
        "\n" +
        "            <!-- 맨왼쪽 맨위버튼 -->\n" +
        "            <li class=\"nav-item active\">\n" +
        "                <a class=\"nav-link\" href=\"/\">\n" +
        "                    <i class=\"fas fa-fw fa-tachometer-alt\"></i>\n" +
        "                    <span>HOME</span></a>\n" +
        "            </li>\n" +
        "\n" +
        "            <!-- Divider -->\n" +
        "            <hr class=\"sidebar-divider\">\n" +
        "            <!-- 관리자 -->\n" +
        "\n" +
        "            <!-- Nav Item - Charts -->\n" +
        "            <!-- 송금기능 구분선 -->\n" +
        "            <div class=\"sidebar-heading\">\n" +
        "                송금기능\n" +
        "            </div>\n" +
        "\n" +
        "            <!-- Nav Item - Charts -->\n" +
        "            <li class=\"nav-item\" onclick=\"active\">\n" +
        "\n" +
        "                <a class=\"nav-link\" href=\"/bank/list\">\n" +
        "\n" +
        "                    <i class=\"fas fa-fw fa-chart-area\"></i>\n" +
        "                    <span>입출금내역</span></a>\n" +
        "            </li>\n" +
        "\n" +
        "            <!-- Nav Item - Tables -->\n" +
        "\n" +
        "            <li class=\"nav-item\" onclick=\"active\">\n" +
        "\n" +
        "                <a class=\"nav-link\" href=\"/bank/send\">\n" +
        "\n" +
        "                    <i class=\"fas fa-fw fa-hand-middle-finger\"></i>\n" +
        "                    <span>송금하기</span></a>\n" +
        "            </li>\n" +
        "            \n" +
        "            <!-- Nav Item - Tables -->\n" +
        "\n" +
        "            <li class=\"nav-item\" onclick=\"active\">\n" +
        "\n" +
        "                <a class=\"nav-link\" href=\"user_register\">\n" +
        "                    <i class=\"fas fa-fw fa-handshake\"></i>\n" +
        "                    <span>수취인 등록</span></a>\n" +
        "            </li>\n" +
        "\n" +
        "            <!-- Nav Item - Tables -->\n" +
        "\n" +
        "            <li class=\"nav-item\" onclick=\"active\">\n" +
        "\n" +
        "\n" +
        "                <a class=\"nav-link\" href=\"/bank/friend_list\">\n" +
        "\n" +
        "                    <i class=\"fas fa-fw fa-male\"></i>\n" +
        "                    <span>수취인 목록</span></a>\n" +
        "            </li>\n" +
        "\n" +
        "             <!-- 구라상품 -->\n" +
        "            <li class=\"nav-item active\">\n" +
        `                <a class=\"nav-link\" href=\"/bank/authorization?account_number=${account_number}&balance=${balance}&rest=${rest}&is_admin=${is_admin}&url=http://127.0.0.1:3000/api/auth/authorization\">\n` +
        "                    <i class=\"fas fa-fw fa-phone\"></i>\n" +
        "\n" +
        "                    <span>인증센터</span></a>\n" +
        "            </li>\n" +
        "\n" +
        "            <!-- 구라상품 -->\n" +
        "\n" +
        "            <li class=\"nav-item\" onclick=\"active\">\n" +
        "                <a class=\"nav-link\" href=\"#\">\n" +
        "                    <i class=\"fas fa-fw fa-file-contract\"></i>\n" +
        "\n" +
        "                    <span>상품가입</span></a>\n" +
        "            </li>\n" +
        "\n" +
        "            <!-- 구라상품 -->\n" +
        "\n" +
        "            <li class=\"nav-item\" onclick=\"active\">\n" +
        "                <a class=\"nav-link\" href=\"#\">\n" +
        "                    <i class=\"fas fa-fw fa-money-bill-wave\"></i>\n" +
        "\n" +
        "                    <span>대출</span></a>\n" +
        "            </li>\n" +
        "\n" +
        "            <!-- 구라상품 -->\n" +
        "\n" +
        "            <li class=\"nav-item\" onclick=\"active\">\n" +
        "                <a class=\"nav-link\" href=\"#\">\n" +
        "                    <i class=\"fas fa-fw fa-address-card\"></i>\n" +
        "\n" +
        "                    <span>카드</span></a>\n" +
        "            </li>\n" +
        "\n" +
        "            <!-- 구라상품 -->\n" +
        "\n" +
        "            <li class=\"nav-item\" onclick=\"active\">\n" +
        "                <a class=\"nav-link\" href=\"/bank/gacha\">\n" +
        "                    <i class=\"fas fa-fw fa-money-check\"></i>\n" +
        "\n" +
        "                    <span>멤버십</span></a>\n" +
        "            </li>\n" +
        "\n" +
        "          \n" +
        "\n" +
        "            <!-- 접기버튼 -->\n" +
        "            <hr class=\"sidebar-divider d-none d-md-block\">\n" +
        "\n" +
        "            <!-- Sidebar Toggler (Sidebar) -->\n" +
        "            <div class=\"text-center d-none d-md-inline\">\n" +
        "                <button class=\"rounded-circle border-0\" id=\"sidebarToggle\"></button>\n" +
        "            </div>\n" +
        "\n" +
        "         \n" +
        "\n" +
        "        </ul>\n" +
        "        <!-- 사이드바 끝 -->\n" +
        "\n" +
        "        <!-- 가운데 시작 -->\n" +
        "        <div id=\"content-wrapper\" class=\"d-flex flex-column\">\n" +
        "\n" +
        "            <!-- Main Content -->\n" +
        "            <div id=\"content\">\n" +
        "\n" +
        "                <!-- Topbar -->\n" +
        "                <nav class=\"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow\">\n" +
        "\n" +
        "                    <!-- Sidebar Toggle (Topbar) -->\n" +
        "                    <button id=\"sidebarToggleTop\" class=\"btn btn-link d-md-none rounded-circle mr-3\">\n" +
        "                        <i class=\"fa fa-bars\"></i>\n" +
        "                    </button>\n" +
        "\n" +
        "                    <!-- 툴바 검색창 -->\n" +
        "                    <!-- <form\n" +
        "                        class=\"d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search\">\n" +
        "                        <div class=\"input-group\">\n" +
        "                            <input type=\"text\" class=\"form-control bg-light border-0 small\" placeholder=\"Search for...\"\n" +
        "                                aria-label=\"Search\" aria-describedby=\"basic-addon2\">\n" +
        "                            <div class=\"input-group-append\">\n" +
        "                                <button class=\"btn btn-primary\" type=\"button\">\n" +
        "                                    <i class=\"fas fa-search fa-sm\"></i>\n" +
        "                                </button>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </form> -->\n" +
        "\n" +
        "                    <!-- Topbar Navbar -->\n" +
        "                    <ul class=\"navbar-nav ml-auto\">\n" +
        "\n" +
        "                        <!-- Nav Item - Search Dropdown (Visible Only XS) -->\n" +
        "                        <li class=\"nav-item dropdown no-arrow d-sm-none\">\n" +
        "                            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"searchDropdown\" role=\"button\"\n" +
        "                                data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
        "                                <i class=\"fas fa-search fa-fw\"></i>\n" +
        "                            </a>\n" +
        "                            <!-- Dropdown - Messages -->\n" +
        "                            <div class=\"dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in\"\n" +
        "                                aria-labelledby=\"searchDropdown\">\n" +
        "                                <form class=\"form-inline mr-auto w-100 navbar-search\">\n" +
        "                                    <div class=\"input-group\">\n" +
        "                                        <input type=\"text\" class=\"form-control bg-light border-0 small\"\n" +
        "                                            placeholder=\"Search for...\" aria-label=\"Search\"\n" +
        "                                            aria-describedby=\"basic-addon2\">\n" +
        "                                        <div class=\"input-group-append\">\n" +
        "                                            <button class=\"btn btn-primary\" type=\"button\">\n" +
        "                                                <i class=\"fas fa-search fa-sm\"></i>\n" +
        "                                            </button>\n" +
        "                                        </div>\n" +
        "                                    </div>\n" +
        "                                </form>\n" +
        "                            </div>\n" +
        "                        </li>\n" +
        "\n" +
        "                        <!-- Nav Item - Alerts -->\n" +
        "                        <li class=\"nav-item dropdown no-arrow mx-1\">\n" +
        "                            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"alertsDropdown\" role=\"button\"\n" +
        "                                data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
        "                                <i class=\"fas fa-bell fa-fw\"></i>\n" +
        "                                <!-- Counter - Alerts -->\n" +
        "                                <span class=\"badge badge-danger badge-counter\">3+</span>\n" +
        "                            </a>\n" +
        "                            <!-- Dropdown - Alerts -->\n" +
        "                            <div class=\"dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in\"\n" +
        "                                aria-labelledby=\"alertsDropdown\">\n" +
        "                                <h6 class=\"dropdown-header\">\n" +
        "                                    Alerts Center\n" +
        "                                </h6>\n" +
        "                                <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n" +
        "                                    <div class=\"mr-3\">\n" +
        "                                        <div class=\"icon-circle bg-primary\">\n" +
        "                                            <i class=\"fas fa-file-alt text-white\"></i>\n" +
        "                                        </div>\n" +
        "                                    </div>\n" +
        "                                    <div>\n" +
        "                                        <div class=\"small text-gray-500\">December 12, 2019</div>\n" +
        "                                        <span class=\"font-weight-bold\">A new monthly report is ready to download!</span>\n" +
        "                                    </div>\n" +
        "                                </a>\n" +
        "                                <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n" +
        "                                    <div class=\"mr-3\">\n" +
        "                                        <div class=\"icon-circle bg-success\">\n" +
        "                                            <i class=\"fas fa-donate text-white\"></i>\n" +
        "                                        </div>\n" +
        "                                    </div>\n" +
        "                                    <div>\n" +
        "                                        <div class=\"small text-gray-500\">December 7, 2019</div>\n" +
        "                                        $290.29 has been deposited into your account!\n" +
        "                                    </div>\n" +
        "                                </a>\n" +
        "                                <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n" +
        "                                    <div class=\"mr-3\">\n" +
        "                                        <div class=\"icon-circle bg-warning\">\n" +
        "                                            <i class=\"fas fa-exclamation-triangle text-white\"></i>\n" +
        "                                        </div>\n" +
        "                                    </div>\n" +
        "                                    <div>\n" +
        "                                        <div class=\"small text-gray-500\">December 2, 2019</div>\n" +
        "                                        Spending Alert: We've noticed unusually high spending for your account.\n" +
        "                                    </div>\n" +
        "                                </a>\n" +
        "                                <a class=\"dropdown-item text-center small text-gray-500\" href=\"#\">Show All Alerts</a>\n" +
        "                            </div>\n" +
        "                        </li>\n" +
        "\n" +
        "                        <!-- Nav Item - Messages -->\n" +
        "                        <li class=\"nav-item dropdown no-arrow mx-1\">\n" +
        "                            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"messagesDropdown\" role=\"button\"\n" +
        "                                data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
        "                                <i class=\"fas fa-envelope fa-fw\"></i>\n" +
        "                                <!-- Counter - Messages -->\n" +
        "                                <span class=\"badge badge-danger badge-counter\">7</span>\n" +
        "                            </a>\n" +
        "                            <!-- Dropdown - Messages -->\n" +
        "                            <div class=\"dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in\"\n" +
        "                                aria-labelledby=\"messagesDropdown\">\n" +
        "                                <h6 class=\"dropdown-header\">\n" +
        "                                    Message Center\n" +
        "                                </h6>\n" +
        "                                <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n" +
        "                                    <div class=\"dropdown-list-image mr-3\">\n" +
        "                                        <img class=\"rounded-circle\" src=\"img/undraw_profile_1.svg\"\n" +
        "                                            alt=\"...\">\n" +
        "                                        <div class=\"status-indicator bg-success\"></div>\n" +
        "                                    </div>\n" +
        "                                    <div class=\"font-weight-bold\">\n" +
        "                                        <div class=\"text-truncate\">Hi there! I am wondering if you can help me with a\n" +
        "                                            problem I've been having.</div>\n" +
        "                                        <div class=\"small text-gray-500\">Emily Fowler · 58m</div>\n" +
        "                                    </div>\n" +
        "                                </a>\n" +
        "                                <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n" +
        "                                    <div class=\"dropdown-list-image mr-3\">\n" +
        "                                        <img class=\"rounded-circle\" src=\"img/undraw_profile_2.svg\"\n" +
        "                                            alt=\"...\">\n" +
        "                                        <div class=\"status-indicator\"></div>\n" +
        "                                    </div>\n" +
        "                                    <div>\n" +
        "                                        <div class=\"text-truncate\">I have the photos that you ordered last month, how\n" +
        "                                            would you like them sent to you?</div>\n" +
        "                                        <div class=\"small text-gray-500\">Jae Chun · 1d</div>\n" +
        "                                    </div>\n" +
        "                                </a>\n" +
        "                                <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n" +
        "                                    <div class=\"dropdown-list-image mr-3\">\n" +
        "                                        <img class=\"rounded-circle\" src=\"img/undraw_profile_3.svg\"\n" +
        "                                            alt=\"...\">\n" +
        "                                        <div class=\"status-indicator bg-warning\"></div>\n" +
        "                                    </div>\n" +
        "                                    <div>\n" +
        "                                        <div class=\"text-truncate\">Last month's report looks great, I am very happy with\n" +
        "                                            the progress so far, keep up the good work!</div>\n" +
        "                                        <div class=\"small text-gray-500\">Morgan Alvarez · 2d</div>\n" +
        "                                    </div>\n" +
        "                                </a>\n" +
        "                                <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n" +
        "                                    <div class=\"dropdown-list-image mr-3\">\n" +
        "                                        <img class=\"rounded-circle\" src=\"https://source.unsplash.com/Mv9hjnEUHR4/60x60\"\n" +
        "                                            alt=\"...\">\n" +
        "                                        <div class=\"status-indicator bg-success\"></div>\n" +
        "                                    </div>\n" +
        "                                    <div>\n" +
        "                                        <div class=\"text-truncate\">Am I a good boy? The reason I ask is because someone\n" +
        "                                            told me that people say this to all dogs, even if they aren't good...</div>\n" +
        "                                        <div class=\"small text-gray-500\">Chicken the Dog · 2w</div>\n" +
        "                                    </div>\n" +
        "                                </a>\n" +
        "                                <a class=\"dropdown-item text-center small text-gray-500\" href=\"#\">Read More Messages</a>\n" +
        "                            </div>\n" +
        "                        </li>\n" +
        "\n" +
        "                        <div class=\"topbar-divider d-none d-sm-block\"></div>\n" +
        "\n" +
        "                        <!-- Nav Item - User Information -->\n" +
        "                        <li class=\"nav-item dropdown no-arrow\">\n" +
        "                            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"userDropdown\" role=\"button\"\n" +
        "                                data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
        `                                <span class=\"mr-2 d-none d-lg-inline text-gray-600 small\">${username}</span>\n` +
        "                                <img class=\"img-profile rounded-circle\"\n" +
        "                                    src=\"img/undraw_profile.svg\">\n" +
        "                            </a>\n" +
        "                            <!-- Dropdown - User Information -->\n" +
        "                            <div class=\"dropdown-menu dropdown-menu-right shadow animated--grow-in\"\n" +
        "                                aria-labelledby=\"userDropdown\">\n" +
        "                                <a class=\"dropdown-item\" href=\"#\">\n" +
        "                                    <i class=\"fas fa-user fa-sm fa-fw mr-2 text-gray-400\"></i>\n" +
        "                                    Profile\n" +
        "                                </a>\n" +
        "                                <a class=\"dropdown-item\" href=\"#\">\n" +
        "                                    <i class=\"fas fa-cogs fa-sm fa-fw mr-2 text-gray-400\"></i>\n" +
        "                                    Settings\n" +
        "                                </a>\n" +
        "                                <a class=\"dropdown-item\" href=\"#\">\n" +
        "                                    <i class=\"fas fa-list fa-sm fa-fw mr-2 text-gray-400\"></i>\n" +
        "                                    Activity Log\n" +
        "                                </a>\n" +
        "                                <div class=\"dropdown-divider\"></div>\n" +
        "                                <a class=\"dropdown-item\" href=\"#\" data-toggle=\"modal\" data-target=\"#logoutModal\">\n" +
        "                                    <i class=\"fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400\"></i>\n" +
        "                                    Logout\n" +
        "                                </a>\n" +
        "                            </div>\n" +
        "                        </li>\n" +
        "\n" +
        "                    </ul>\n" +
        "\n" +
        "                </nav>\n" +
        "                <!-- 툴바 끝 -->\n" +
        "\n" +
        "                <!-- Begin Page Content -->\n" +
        "                <div class=\"container-fluid\">\n" +
        "\n" +
        "                    <!-- Page Heading -->\n" +
        "                    <div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\n" +
        "                        <h1 class=\"h3 mb-0 text-gray-800\">대쉬보드</h1>\n" +
        "                        <!-- <a href=\"#\" class=\"d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm\"><i\n" +
        "                                class=\"fas fa-download fa-sm text-white-50\"></i> Generate Report</a> -->\n" +
        "                    </div>\n" +
        "\n" +
        "                    <!-- Content Row -->\n" +
        "                    <div class=\"row\">\n" +
        "\n" +
        "                        <!-- Earnings (Monthly) Card Example -->\n" +
        "                        <div class=\"col-xl-3 col-md-6 mb-4\">\n" +
        "                            <div class=\"card border-left-primary shadow h-100 py-2\">\n" +
        "                                <div class=\"card-body\">\n" +
        "                                    <div class=\"row no-gutters align-items-center\">\n" +
        "                                        <div class=\"col mr-2\">\n" +
        "                                            <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\">\n" +
        "                                                계좌번호</div>\n" +
        `                                            <div class=\"h5 mb-0 font-weight-bold text-gray-800\">${account_number}</div>\n` +
        "                                        </div>\n" +
        "                                        <div class=\"col-auto\">\n" +
        "                                            <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\n" +
        "                                        </div>\n" +
        "                                    </div>\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "\n" +
        "                        <!-- Earnings (Monthly) Card Example -->\n" +
        "                        <div class=\"col-xl-3 col-md-6 mb-4\">\n" +
        "                            <div class=\"card border-left-success shadow h-100 py-2\">\n" +
        "                                <div class=\"card-body\">\n" +
        "                                    <div class=\"row no-gutters align-items-center\">\n" +
        "                                        <div class=\"col mr-2\">\n" +
        "                                            <div class=\"text-xs font-weight-bold text-success text-uppercase mb-1\">\n" +
        "                                                자산</div>\n" +
        `                                            <div class=\"h5 mb-0 font-weight-bold text-gray-800\">$ ${balance}</div>\n` +
        "                                        </div>\n" +
        "                                        <div class=\"col-auto\">\n" +
        "                                            <i class=\"fas fa-dollar-sign fa-2x text-gray-300\"></i>\n" +
        "                                        </div>\n" +
        "                                    </div>\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "\n" +
        "                        <!-- Earnings (Monthly) Card Example -->\n" +
        "                        <div class=\"col-xl-3 col-md-6 mb-4\">\n" +
        "                            <div class=\"card border-left-info shadow h-100 py-2\">\n" +
        "                                <div class=\"card-body\">\n" +
        "                                    <div class=\"row no-gutters align-items-center\">\n" +
        "                                        <div class=\"col mr-2\">\n" +
        "                                            <div class=\"text-xs font-weight-bold text-info text-uppercase mb-1\">프로젝트 진행률\n" +
        "                                            </div>\n" +
        "                                            <div class=\"row no-gutters align-items-center\">\n" +
        "                                                <div class=\"col-auto\">\n" +
        `                                                    <div class=\"h5 mb-0 mr-3 font-weight-bold text-gray-800\">${rest}%</div>\n` +
        "                                                </div>\n" +
        "                                                <div class=\"col\">\n" +
        "                                                    <div class=\"progress progress-sm mr-2\">\n" +
        "                                                        <div class=\"progress-bar bg-info\" role=\"progressbar\"\n" +
        `                                                            style=width: ${rest} aria-valuenow=${rest} aria-valuemin=\"0\"\n` +
        "                                                            aria-valuemax=\"100\"></div>\n" +
        "                                                    </div>\n" +
        "                                                </div>\n" +
        "                                            </div>\n" +
        "                                        </div>\n" +
        "                                        <div class=\"col-auto\">\n" +
        "                                            <i class=\"fas fa-clipboard-list fa-2x text-gray-300\"></i>\n" +
        "                                        </div>\n" +
        "                                    </div>\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "\n" +
        "                        <!-- Pending Requests Card Example -->\n" +
        "                        <div class=\"col-xl-3 col-md-6 mb-4\">\n" +
        "                            <div class=\"card border-left-warning shadow h-100 py-2\">\n" +
        "                                <div class=\"card-body\">\n" +
        "                                    <div class=\"row no-gutters align-items-center\">\n" +
        "                                        <div class=\"col mr-2\">\n" +
        "                                            <div class=\"text-xs font-weight-bold text-warning text-uppercase mb-1\">\n" +
        "                                                어드민 속성</div>\n" +
        `                                            <div class=\"h5 mb-0 font-weight-bold text-gray-800\">${is_admin}</div>\n` +
        "                                        </div>\n" +
        "                                        <div class=\"col-auto\">\n" +
        "                                            <i class=\"fas fa-comments fa-2x text-gray-300\"></i>\n" +
        "                                        </div>\n" +
        "                                    </div>\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "<div class=\"card shadow mb-4\">\n" +
        "    <div class=\"card-header py-3\">\n" +
        "        <h6 class=\"m-0 font-weight-bold text-primary\">인증센터</h6>\n" +
        "    </div>\n" +
        "    <div class=\"card-body\">\n" +
        "        <div class=\"table-responsive\">\n" +
        "            <table class=\"table table-bordered\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\n" +
        "<thead>\n" +
        "<tr>\n" +
        "    <th>인증 기관</th>\n" +
        "    <th>인증 여부</th>\n" +
        "</tr>\n" +
        "</thead>\n" +
        "<tr>\n" +
        "    <td>EggMoney</td>\n" +
        "    <td>인증 됨</td>\n" +
        "</tr>\n" +
        "<tr>\n" +
        "    <td>국민은행</td>\n" +
        "    <td>인증 안됨</td>\n" +
        "</tr>\n" +
        "<tr>\n" +
        "    <td>우리은행</td>\n" +
        "    <td>인증 안됨</td>\n" +
        "</tr>\n" +
        "<tr>\n" +
        "    <td>신한은행</td>\n" +
        "    <td>인증 안됨</td>\n" +
        "</tr>"+
    "            </table>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>" +
    "\n" +
    "<!-- 바디 끝 -->\n" +
    "\n" +
    "</div>\n" +
    "                    \n" +
    "<!-- 맨밑-->\n" +
    "\n" +
    "</div>\n" +
    "<!-- End of Content Wrapper -->\n" +
    "\n" +
    "</div>\n" +
    "<!-- End of Page Wrapper -->\n" +
    "\n" +
    "<!-- Scroll to Top Button-->\n" +
    "<a class=\"scroll-to-top rounded\" href=\"#page-top\">\n" +
    "<i class=\"fas fa-angle-up\"></i>\n" +
    "</a>\n" +
    "\n" +
    "<!-- Logout Modal-->\n" +
    "<div class=\"modal fade\" id=\"logoutModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n" +
    "aria-hidden=\"true\">\n" +
    "<div class=\"modal-dialog\" role=\"document\">\n" +
    "<div class=\"modal-content\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Ready to Leave?</h5>\n" +
    "        <button class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">\n" +
    "            <span aria-hidden=\"true\">×</span>\n" +
    "        </button>\n" +
    "    </div>\n" +
    "    <div class=\"modal-body\">Select \"Logout\" below if you are ready to end your current session.</div>\n" +
    "    <div class=\"modal-footer\">\n" +
    "        <button class=\"btn btn-secondary\" type=\"button\" data-dismiss=\"modal\">Cancel</button>\n" +
    "        <a class=\"btn btn-primary\" href=\"login.html\">Logout</a>\n" +
    "    </div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Bootstrap core JavaScript-->\n" +
    "<script src=\"vendor/jquery/jquery.min.js\"></script>\n" +
    "<script src=\"vendor/bootstrap/js/bootstrap.bundle.min.js\"></script>\n" +
    "\n" +
    "<!-- Core plugin JavaScript-->\n" +
    "<script src=\"vendor/jquery-easing/jquery.easing.min.js\"></script>\n" +
    "\n" +
    "<!-- Custom scripts for all pages-->\n" +
    "<script src=\"js/sb-admin-2.min.js\"></script>\n" +
    "\n" +
    "<!-- Page level plugins -->\n" +
    "<script src=\"vendor/chart.js/Chart.min.js\"></script>\n" +
    "\n" +
    "<!-- Page level custom scripts -->\n" +
    "<script src=\"js/demo/chart-area-demo.js\"></script>\n" +
    "<script src=\"js/demo/chart-pie-demo.js\"></script>\n" +
    "\n" +
    "</body>\n" +
    "\n"

    return res.json(data)
})

module.exports = router;