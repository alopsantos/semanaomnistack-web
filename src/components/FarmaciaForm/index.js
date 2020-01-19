import React, { useState, useEffect } from 'react';
import './styles.css';

function FarmaciaForm({ onSubmit }) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [urllogo, setUrllogo] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');

    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setLatitude(latitude);
                setLongitude(longitude);
            },
            (err) => {
                console.log(err);
            },
            {
                timeout: 30000,
            }
        )
    }, []);

    async function handleAddFamacia(event) {
        event.preventDefault();

        await onSubmit({
            name,
            phone,
            urllogo,
            address,
            email,
            longitude,
            latitude,
        });
        setName('');
        setPhone('');
        setUrllogo('');
        setAddress('');
        setEmail('');
    }
    return (
        <form onSubmit={handleAddFamacia}>
            <div className="input-block">
                <label htmlFor="">Nome</label>
                <input
                    name="name"
                    id="name"
                    required
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
            </div>
            <div className="input-block">
                <label htmlFor="">Telefone</label>
                <input
                    name="phone"
                    id="phone"
                    required
                    value={phone}
                    onChange={event => setPhone(event.target.value)}
                />
            </div>
            <div className="input-block">
                <label htmlFor="">Logo</label>
                <input
                    name="urllogo"
                    id="urllogo"
                    required
                    value={urllogo}
                    onChange={event => setUrllogo(event.target.value)}
                />
            </div>
            <div className="input-block">
                <label htmlFor="">Endereço</label>
                <input
                    name="address"
                    id="address"
                    required
                    value={address}
                    onChange={event => setAddress(event.target.value)}
                />
            </div>
            <div className="input-block">
                <label htmlFor="">Email</label>
                <input
                    name="email"
                    id="email"
                    required
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
            </div>

            <div className="input-group">
                <div className="input-block">
                    <label htmlFor="">Latitude</label>
                    <input
                        type="namber"
                        name="latitude"
                        id="latitude"
                        required
                        value={latitude}
                        onChange={event => setLatitude(event.target.value)}
                    />
                </div>

                <div className="input-block">
                    <label htmlFor="">Longitude</label>
                    <input
                        type="namber"
                        name="longitude"
                        id="longitude"
                        required
                        value={longitude}
                        onChange={event => setLongitude(event.target.value)}
                    />
                </div>
            </div>

            <button type="submit">Salvar</button>
        </form>
        
    );
}

export default FarmaciaForm;