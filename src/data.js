export const data = {
    "user": {
        "id": 1111,
        "base_id": 22222,
        "name": "Злобин Максим Александрович",
        "code": "akor16k61",
        "status": "Активен",
        "groups": "Александров.Частные клиенты, Абонент Александров, Александров.FTTB",
        "tags": "сотрудник",
        "phone": "88005553535",
        "account": "akor16k61",
        "overdraft": 0,
        "overdraft_expires": null,
        "link": "https://hydra.trytek.ru/profile",
        "balance": 9.05,
        "rec_payment": null,
        "comments": [],
        "emails": [],
        "roles": [
            "zlobin",
            "akor16k61"
        ],
        "us_id": null,
        "us_addresses": []
    },
    "devices": [
        {
            "id": 21157161901,
            "address": "г. Александров, ул. Королева, д. 16, кв. 61",
            "dev_type_id": 4750965601,
            "name": "Оконечное оборудование Александров (Оконечное оборудование Александров-16298)",
            "ip_address": "127.0.0.1",
            "dev_name": "ALX-KOR16-1",
            "dev_code": "D-Link DES-3200-26/C1",
            "dev_ip_address": "127.0.0.1",
            "comp_code": "17",
            "services": [
                {
                    "id": 40219101,
                    "name": "Сотрудник",
                    "state_id": 11114,
                    "state": "Услуга оказывается",
                    "start": "2023-10-10 00:00:00",
                    "end": null,
                    "pay_day": 10
                }
            ]
        },
    ],
    "cashier": {
        "Наличные": {
            "type": "Наличные",
            "services": [
                {
                    "id": 1,
                    "name": "Интернет"
                },
                {
                    "id": 2,
                    "name": "КТВ"
                },
                {
                    "id": 3,
                    "name": "Юр. лицо"
                }
            ]
        },
        "Карта": {
            "type": "Карта",
            "services": [
                {
                    "id": 4,
                    "name": "Интернет"
                }
            ]
        },
        "QR": {
            "type": "QR",
            "services": [
                {
                    "id": 5,
                    "name": "Интернет"
                }
            ]
        }
    }
}

export const cardData = {
    "data": {
        "base_id": 74549105001,
        "name": "Злобин Максим Александрович",
        "type": "Физическое лицо",
        "state": "Активен",
        "roles": [
            "akor16k61",
            " zlobin"
        ],
        "link": "https://hydra.trytek.ru/subjects/users/edit/74549105001",
        "addresses": {
            "Обычный адрес": [
                {
                    "address": "г. Александров, ул. Королева",
                    "view": "Фактический адрес"
                }
            ],
            "Телефон": [
                {
                    "address": "88005553535",
                    "view": "Мобильный"
                }
            ]
        }
    }
}