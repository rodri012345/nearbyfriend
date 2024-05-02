import React, { useEffect, useState } from 'react';
import { Avatar, Button, List, Skeleton } from 'antd';
import SoliModal from './SolicitudModal';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase-conf'; // Asegúrate de importar correctamente la configuración de Firebase
import SolicitudModalConcluidas from './SolicitudModalConcluidas';

const SolicitudesRecientes = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'eventos'));
        const events = [];
        for (const docRef of querySnapshot.docs) {
          const event = { id: docRef.id, ...docRef.data() };
          // Fetch client data
          const clienteDoc = await getDoc(doc(db, 'clientes', event.clienteId.clienteId));
          const clienteData = clienteDoc.data();
          event.cliente = clienteData; // Add client data to the event object
          if (event.estado === 'completado') { // Filter events with estado "inactivo"
            events.push(event);
          }
        }
        setData(events);
        setList(events);
        setInitLoading(false);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const onLoadMore = () => {
    setLoading(true);
    // Aquí puedes implementar la lógica para cargar más eventos si es necesario
  };

  const loadMore =
    !initLoading && !loading ? (
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
              description="Solicito una cita"
            />
          </Skeleton>
        </List.Item>
      )}
    />
  );
};

export default SolicitudesRecientes;