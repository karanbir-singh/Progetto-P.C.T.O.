import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Layout, Row } from 'antd';
import Meta from "antd/lib/card/Meta";
import assets from "../assets/*.jpg";
import login from "../assets/login.png";
import { Link } from "react-router-dom";
import { Footer } from "antd/lib/layout/layout";
import { AppContext } from "..";
import title from "../assets/title.png";

const { Header, Sider, Content } = Layout;

export default function Home(props) {

  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    dispatch({ type: 'change selectedKey', payload: { selectedKey: 'home' } });
  }, [])

  return (
    <>
      <Layout className="site-layout">
        <Header className="layout-header" style={{ height: 80, padding: 0, paddingLeft: 10 }}>
          <img src={title} style={{ marginTop: 7 }}></img>
        </Header>
        <Content className="layout-content">
          <div className="site-card-wrapper">
            <Row gutter={16}>
              {
                state.user === null ?
                  <>
                    <Col span={8} xs={24} md={12} xl={8}>
                      <Card
                        hoverable
                        cover={<img alt="img_registrazione" src={assets.registrazione} />}
                      >
                        <Meta title="Registrati nell'area riservata" description={<Button type="primary"><Link to="/registrazione">Procedi</Link></Button>} />
                      </Card>
                    </Col>
                    <Col span={8} xs={24} md={12} xl={8}>
                      <Card
                        hoverable
                        cover={<img alt="img_login" src={login} />}
                      >
                        <Meta title="Accedi all'area riservata" description={<Button type="primary"><Link to="/login">Procedi</Link></Button>} />
                      </Card>
                    </Col>
                    <Col span={8} xs={24} md={12} xl={8}>
                      <Card
                        hoverable
                        cover={<img alt="img_prenotazione" src={assets.prenotazione} />}
                      >
                        <Meta title="Servizio prenotazione Tampone COVID‑19" description={<Button type="primary"><Link to="/prenotazione">Prenota tampone</Link></Button>} />
                      </Card>
                    </Col>
                    <Col span={8} xs={24} md={12} xl={8}>
                      <Card
                        hoverable
                        cover={<img alt="img_annullamento" src={assets.annullamento} />}
                      >
                        <Meta title="Annulla una prenotazione" description={<Button type="primary"><Link to="/annullamento">Procedi</Link></Button>} />
                      </Card>
                    </Col>
                  </>
                  :
                  state.user.tipo == '1' ?
                    <>
                      <Col span={8} xs={24} md={12} xl={8}>
                        <Card
                          hoverable
                          cover={<img alt="img_tampone" src={assets.tampone} />}
                        >
                          <Meta title="Esegui un tampone" description={<Button type="primary"><Link to="/esegui_tampone">Procedi</Link></Button>} />
                        </Card>
                      </Col>
                    </>
                    :
                    state.user.tipo == '2' ?
                      <>

                      </>
                      : state.user.tipo == '0' ?
                        <>
                          <Col span={8} xs={24} md={12} xl={8}>
                            <Card
                              hoverable
                              cover={<img alt="img_prenotazione" src={assets.prenotazione} />}
                            >
                              <Meta title="Servizio prenotazione Tampone COVID‑19" description={<Button type="primary"><Link to="/prenotazione">Prenota tampone</Link></Button>} />
                            </Card>
                          </Col>
                          <Col span={8} xs={24} md={12} xl={8}>
                            <Card
                              hoverable
                              cover={<img alt="img_annullamento" src={assets.annullamento} />}
                            >
                              <Meta title="Annulla una prenotazione" description={<Button type="primary"><Link to="/annullamento">Procedi</Link></Button>} />
                            </Card>
                          </Col>
                        </>
                        :
                        <>
                          <Col span={8} xs={24} md={12} xl={8}>
                            <Card
                              hoverable
                              cover={<img alt="img_prenotazione" src={assets.prenotazione} />}
                            >
                              <Meta title="Servizio prenotazione Tampone COVID‑19" description={<Button type="primary"><Link to="/prenotazione">Prenota tampone</Link></Button>} />
                            </Card>
                          </Col>
                          <Col span={8} xs={24} md={12} xl={8}>
                            <Card
                              hoverable
                              cover={<img alt="img_annullamento" src={assets.annullamento} />}
                            >
                              <Meta title="Annulla una prenotazione" description={<Button type="primary"><Link to="/annullamento">Procedi</Link></Button>} />
                            </Card>
                          </Col>
                        </>
              }
              <Col span={8} xs={24} md={12} xl={8}>
                <Card
                  hoverable
                  cover={<img alt="img_contagio" src={assets.contagio} />}
                >
                  <Meta title="Mappa mondiale del contagio" description={<Button type="primary"><Link to="/mappa_contagio">Vedi mappa</Link></Button>} />
                </Card>
              </Col>
              <Col span={8} xs={24} md={12} xl={8}>
                <Card
                  hoverable
                  cover={<img alt="img_vaccini" src={assets.vaccini} />}
                >
                  <Meta title="Situazione delle vaccinazioni in Italia" description={<Button type="primary"><Link to="/situazione_vaccini">Vedi andamento</Link></Button>} />
                </Card>
              </Col>
            </Row>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Copyright © 2021 Singh Karanbir, Michele Potettu, Patrik Maniu, Vasile Laura. All rights riserved.</Footer>
      </Layout>
    </>
  );
}