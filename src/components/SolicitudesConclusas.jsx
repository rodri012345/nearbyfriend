import React, { useEffect, useState } from 'react';
import { Avatar, Button, List, Skeleton } from 'antd';
import SolicitudModalConcluidas from './SolicitudModalConcluidas';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase-conf';

const SolicitudConcluida = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const [totalSolicitudes, setTotalSolicitudes] = useState(0);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'eventos')); // Obtener solo 5 solicitudes
        const events = [];
        for (const docRef of querySnapshot.docs) {
          const event = { id: docRef.id, ...docRef.data() };
          // Fetch client data
          const clienteDoc = await getDoc(doc(db, 'clientes', event.clienteId.clienteId));
          const clienteData = clienteDoc.data();
          event.cliente = clienteData; // Add client data to the event object
          if (event.estado === 'completado') { // Filter even
            events.push(event);
          }
        }
        setData(events);
        setList(events);
        setTotalSolicitudes(querySnapshot.size); // Establecer el total de solicitudes
        setInitLoading(false);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const onLoadMore = async () => {
    setLoading(true);
    try {
      const ultimoEvento = list[list.length - 1];
      const querySnapshot = await getDocs(
        collection(db, 'eventos').startAfter(ultimoEvento) // Obtener 5 solicitudes más
      );

      const masEventos = [];
      for (const docRef of querySnapshot.docs) {
        const evento = { id: docRef.id, ...docRef.data() };
        // Obtener datos del cliente
        const clienteDoc = await getDoc(doc(db, 'clientes', evento.clienteId.clienteId));
        const datosCliente = clienteDoc.data();
        evento.cliente = datosCliente; // Add client data to the event object
        if (evento.estado === 'completado') { // Filter events with estado "inactivo"
          masEventos.push(evento);
        }
      }

      setList([...list, ...masEventos]);
      setLoading(false);
    } catch (error) {
      console.error('Error al cargar más eventos:', error);
      setLoading(false);
    }
  };

  const loadMore =
    !initLoading && !loading && totalSolicitudes > list.length ? ( // Mostrar el botón "Cargar Más" solo si hay más solicitudes para cargar
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button onClick={onLoadMore}>Cargar Más</Button>
      </div>
    ) : null;

  return (
    <List
      className="demo-loadmore-list"
      loading={initLoading}
      itemLayout="horizontal"
      loadMore={loadMore}
      dataSource={list}
      renderItem={(item) => (
        <List.Item
          actions={[<SolicitudModalConcluidas eventoId={item.id} />]}
        >
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              avatar={<Avatar src={item.cliente?.imageURL} />}
              title={<a href="">{`${item.cliente?.nombre} ${item.cliente?.apellido}`}</a>}
              description="Cita Concluida"
            />
          </Skeleton>
        </List.Item>
      )}
    />
  );
};

export default SolicitudConcluida;