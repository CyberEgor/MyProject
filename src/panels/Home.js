import React from 'react';
import PropTypes from 'prop-types';
import {Panel, Button, Group, Div, PanelHeader, Input, FormLayout} from '@vkontakte/vkui';
import File from "@vkontakte/vkui/dist/components/File/File";
import img from "../img/default_img.PNG"

const Home = ({id, go, fetchedUser, ...props}) => {
    return (
        <Panel id={id}>
            <PanelHeader>Найти потеряшку</PanelHeader>
            <Group>
                <Div>
                    Посты с грамматическими ошибками или неполным описанием публиковаться не будут!
                </Div>
            </Group>
            <Group title="Для отправки поста заполните пожалуйста формы:">
                <Div>
                    <div>
                        <div>
                            <FormLayout>
                                <Input top="Кого ищешь?" name="field1" value={props.innquiryInfo.field1}
                                       onChange={props.сhangeForms} type="text" placeholder="Кого ищешь?"/>
                                <Input top="Время встречи" name="field2" value={props.innquiryInfo.field2}
                                       onChange={props.сhangeForms} type="text" placeholder="Время встречи"/>
                                <Input top="Где встретились" name="field3" value={props.innquiryInfo.field3}
                                       onChange={props.сhangeForms} type="text" placeholder="Где встретились"/>
                                <Input top="Приметы, одежда" name="field4" value={props.innquiryInfo.field4}
                                       onChange={props.сhangeForms} type="text" placeholder="Приметы, одежда"/>
                                <File top="Прикрепить фото (необязательно):" onChange={props.сhangeForms} name="file"
                                      type="file" placeholder="Прикрепить фото" accept="image/*"/>
                            </FormLayout>
                        </div>
                        {props.innquiryInfo.isReady ?
                            <Div>Ищу {props.innquiryInfo.field1}. {props.innquiryInfo.field2} встретились {props.innquiryInfo.field3}. {props.innquiryInfo.field4}. Отзовись в опросе 💬<div>
                                <img className="imgFormat" src={props.innquiryInfo.imageUrl || img}
                                                   alt={"img"}/></div></Div> : <div/>}

                    </div>
                    {props.innquiryInfo.isReady ?
                        <Button size="xl" onClick={props.sendForms}>Отправить новость</Button> :
                        <Button size="xl" disabled level="2">Отправить новость</Button>}

                </Div>
            </Group>
        </Panel>)
};


Home.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    sendForms: PropTypes.func.isRequired,
    fetchedUser: PropTypes.shape({
        photo_200: PropTypes.string,
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        city: PropTypes.shape({
            title: PropTypes.string,
        }),
    }),
};

export default Home;
