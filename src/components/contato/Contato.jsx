import React from 'react';
import Card from "../general/card/Card"
import Card2 from "../general/card/Card2"
import "./contato.css";
import telefoneIcon from "../../img/icons8-phone-color-100.png";
import emailIcon from "../../img/icons8-important-mail-100.png";
import socialMediaIcon from "../../img/icons8-social-network-100.png";
import facebookIcon from "../../img/icons8-facebook-color-100.png";
import linkedinIcon from "../../img/icons8-linkedin-circled-color-100.png";
import telegramIcon from "../../img/icons8-telegram-app-color-100.png";
import discordIcon from "../../img/icons8-discord-color-100.png";

export default props => {

    return (
        <Card id="cardDefault100">
            <div className="divContato">
                <table>
                    <tbody>
                        <tr>
                            <th>
                                <img src={telefoneIcon} alt="ícone telefone" />
                            </th>
                            <th>
                                <h1>Contato</h1>
                            </th>
                        </tr>
                    </tbody>
                </table>
                <Card>
                    <h1>Olá! Você está em: Contato <span  role="img" aria-label="feliz">😁</span></h1>
                    <p>Seja bem vindo a aba de contatos. Caso se interesse, entre em contato comigo por algum dos meios abaixo.</p>
                </Card>
                <div id="divCardsContato">
                    <Card2 id="cardDois100">
                        <table>
                            <tbody>
                                <tr>
                                    <th>
                                        <img src={telefoneIcon} alt="ícone telefone" />
                                    </th>
                                    <th>
                                        <h3>Telefones</h3>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                        <br></br>
                        <p>Celular:  <a href={"tel:+5519993832547"}>{"(19) 99383-2547"}</a></p>
                    </Card2>
                    <Card2>
                        <table>
                            <tbody>
                                <tr>
                                    <th>
                                        <img src={emailIcon} alt="ícone Email" />
                                    </th>
                                    <th>
                                        <h3>Emails</h3>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                        <br></br>
                        <p>1º:  <a href={"mailto:leonardocps9@gmail.com"}>{"leonardocps9@gmail.com"}</a></p>
                        <p>2º:  <a href={"mailto:leonardocps9@protonmail.com"}>{"leonardocps9@protonmail.com"}</a></p>
                    </Card2>
                    <Card2>
                        <table>
                            <tbody>
                                <tr>
                                    <th>
                                        <img src={socialMediaIcon} alt="ícone Email" />
                                    </th>
                                    <th>
                                        <h3>Redes Sociais</h3>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                        <br></br>
                        <table>
                            <tbody>
                                <tr>
                                    <th>
                                        <img src={facebookIcon} alt="ícone facebook" />
                                    </th>
                                    <th>
                                        <a href="https://www.facebook.com/leonardo.petta.nascimento/" target="_blank" rel="noopener noreferrer">Facebook</a>
                                    </th>
                                    <th>
                                        <img src={discordIcon} alt="ícone discord" />
                                    </th>
                                    <th>
                                        <a href="https://discord.com/users/214878249208119296" target="_blank" rel="noopener noreferrer">Discord</a>
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        <img src={telegramIcon} alt="ícone telegram" />
                                    </th>
                                    <th>
                                        <a href="https://t.me/leonardopn" target="_blank" rel="noopener noreferrer">Telegram</a>
                                    </th>
                                    <th>
                                        <img src={linkedinIcon} alt="ícone linkedin" />
                                    </th>
                                    <th>
                                        <a href="https://www.linkedin.com/in/leonardo-petta-do-nascimento-75674015b/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </Card2>
                </div>
            </div>
        </Card >
    )
}