export const emailTemplate: string = `
                  <table class="body" border="0" cellspacing="0" cellpadding="0">
                    <tbody>
                      <tr>
                        <td>&nbsp;</td>
                        <td class="container">
                          <div class="content">
                            <table class="main">
                              <!-- START MAIN CONTENT AREA -->
                              <tbody>
                                <tr>
                                  <td class="wrapper">
                                    <table border="0" cellspacing="0" cellpadding="0">
                                      <tbody>
                                        <tr>
                                          <td>                    
                                            <p>Dear {data.email},</p>
                                            <p>Thank you for registering on our site. Please activate your account using the link provided below.</p>
                                            <p>Activation Link: <a href="{verificationLink}">{verificationLink}</a></p>
                                            <p>If this wasn't you, please ignore this message. If you have any questions, please visit our FAQ section.</p>   
                                            <p>=============================================<br />
                                            <br />
                                            <br/>
                                            Email: info@yourdomain.com<br/>
                                            =============================================</p>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <!-- END MAIN CONTENT AREA -->
                              </tbody>
                            </table>
                          </div>
                        </td>
                        <td>&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>                                         
                `