import React, { useEffect, useState } from 'react';
import { Avatar, Button, List, Skeleton } from 'antd';
import SolicitudModalCompletado from './SolicitudModalCompletado';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase-conf'; 
import "./Solicitud.css"

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
          const clienteDoc = await getDoc(doc(db, 'clientes', event.clienteId.clienteId));
          const clienteData = clienteDoc.data();
          event.cliente = clienteData; 
          if (event.estado === 'activo') { 
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
        <Button className='btn' onClick={onLoadMore}>Cargar Más</Button>
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
          actions={[<SolicitudModalCompletado eventoId={item.id} />]}
        >
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              avatar={<Avatar src={item.cliente?.imageURL} />}
              title={<a href="">{`${item.cliente?.nombre} ${item.cliente?.apellido}`}</a>}
              description="Solicito aceptada"
            />
          </Skeleton>
        </List.Item>
      )}
    />
  );
};

export default SolicitudesRecientes;