import React, { useState, useEffect } from 'react';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import SocialLinks from '../components/SocialLinks';
import diagramaVPC from '../assets/imagenes/Arquitectura-VPC.png';
import imagenDJEventHub1 from '../assets/imagenes/djeventhub1.png';
import imagenDJEventHub2 from '../assets/imagenes/djeventhub2.png';
import imagenIncidencias1 from '../assets/imagenes/incidencias1.png';
import imagenIncidencias2 from '../assets/imagenes/incidencias2.png';
import imagenTallerRayoMaqueen1 from '../assets/imagenes/taller1.png';
import imagenTallerRayoMaqueen2 from '../assets/imagenes/taller2.png';
import imagenRestaurant1 from '../assets/imagenes/restaurant1.png'; 
import imagenRestaurant2 from '../assets/imagenes/restaurant2.png';
import imagenTerraformCICD from '../assets/imagenes/contruccion.png';
import '../assets/css/pages/Proyectos.css';
import ManualRedesEC2NAT from '../assets/imagenes/ManualRedesEC2NAT.pdf';



// Componente PDFViewer mejorado
const PDFViewer = ({ file }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [viewerType, setViewerType] = useState('direct'); // 'direct', 'google', 'fallback'
  
  // Construir las URLs
  const baseUrl = window.location.origin;
  const pdfUrl = file.startsWith('http') ? file : `${baseUrl}${file}`;
  const googleDocsUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`;

  // Manejar errores de carga
  const handleError = (type) => {
    if (type === 'direct' && viewerType === 'direct') {
      // Si falla la carga directa, intentar con Google Docs Viewer
      setViewerType('google');
    } else if (type === 'google' || viewerType === 'google') {
      // Si falla Google Docs Viewer, mostrar opciones de respaldo
      setViewerType('fallback');
      setIsLoading(false);
      setError('No se pudo cargar la vista previa del documento.');
    } else {
      // Cualquier otro caso, mostrar opciones de respaldo
      setViewerType('fallback');
      setIsLoading(false);
    }
  };

  // Renderizar el visor según el tipo
  const renderViewer = () => {
    switch(viewerType) {
      case 'direct':
        return (
          <iframe
            src={pdfUrl}
            width="100%"
            height="600px"
            title="Vista previa del documento"
            style={{ border: 'none' }}
            onLoad={() => setIsLoading(false)}
            onError={() => handleError('direct')}
            className="pdf-iframe"
          />
        );
      case 'google':
        return (
          <iframe
            src={googleDocsUrl}
            width="100%"
            height="600px"
            title="Vista previa del documento"
            style={{ border: 'none' }}
            onLoad={() => setIsLoading(false)}
            onError={() => handleError('google')}
            className="pdf-iframe"
            sandbox="allow-scripts allow-same-origin"
          />
        );
      case 'fallback':
      default:
        return (
          <div className="pdf-fallback">
            <div className="alert alert-warning">
              <h5>Vista previa no disponible</h5>
              <p>No se pudo cargar la vista previa del documento. Por favor, descárguelo para verlo.</p>
              <div className="d-flex gap-2 flex-wrap justify-content-center">
                <a 
                  href={pdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  download
                >
                  <i className="bi bi-download me-2"></i>
                  Descargar PDF
                </a>
                <a 
                  href={googleDocsUrl.replace('&embedded=true', '')} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline-secondary"
                >
                  <i className="bi bi-box-arrow-up-right me-2"></i>
                  Abrir en Google Docs
                </a>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="pdf-viewer-container">
      {isLoading && viewerType !== 'fallback' && (
        <div className="pdf-loading">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando PDF...</span>
          </div>
          <p className="mt-2">Cargando documento...</p>
        </div>
      )}
      
      {error && (
        <div className="alert alert-warning">
          <p>{error}</p>
        </div>
      )}
      
      {renderViewer()}
      

    </div>
  );
};

// Componente Modal para mostrar el diagrama
const ModalDiagrama = ({ isOpen, onClose, imagenUrl, titulo }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-diagrama-overlay" onClick={onClose}>
      <div className="modal-diagrama-contenido" onClick={e => e.stopPropagation()}>
        <div className="modal-diagrama-header">
          <h3 className="modal-diagrama-titulo">
            <i className="bi bi-diagram-3 me-2"></i>
            {titulo} - Diagrama de Arquitectura
          </h3>
          <button 
            className="modal-diagrama-cerrar" 
            onClick={onClose}
            aria-label="Cerrar modal"
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>
        <div className="modal-diagrama-cuerpo">
          <div className="diagrama-contenedor">
            <img 
              src={imagenUrl} 
              alt={`Diagrama de arquitectura de ${titulo}`} 
              className="diagrama-imagen"
              onLoad={(e) => {
                // Agregar clase cuando la imagen se haya cargado
                e.target.classList.add('cargado');
              }}
            />
            <div className="diagrama-cargando">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Cargando...</span>
              </div>
              <p>Cargando diagrama...</p>
            </div>
          </div>
        </div>
        <div className="modal-diagrama-footer">
          <button 
            className="btn btn-outline-secondary" 
            onClick={() => window.open(imagenUrl, '_blank')}
          >
            <i className="bi bi-box-arrow-up-right me-2"></i>
            Abrir en nueva pestaña
          </button>
          <button 
            className="btn btn-primary" 
            onClick={() => {
              const link = document.createElement('a');
              link.href = imagenUrl;
              link.download = `diagrama-${titulo.toLowerCase().replace(/\s+/g, '-')}.png`;
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            <i className="bi bi-download me-2"></i>
            Descargar imagen
          </button>
        </div>
      </div>
    </div>
  );
};

// Componente Modal para mostrar el PDF
const PdfModal = ({ isOpen, onClose, pdfUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-diagrama-overlay" onClick={onClose}>
      <div className="modal-diagrama-contenido" onClick={e => e.stopPropagation()}>
        <div className="modal-diagrama-header">
          <h3 className="modal-diagrama-titulo">
            <i className="bi bi-file-earmark-pdf me-2"></i>
            Manual de Redes EC2 NAT
          </h3>
          <button 
            className="modal-diagrama-cerrar" 
            onClick={onClose}
            aria-label="Cerrar"
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>
        <div className="modal-diagrama-cuerpo">
          <div className="w-100 h-100 d-flex justify-content-center align-items-center">
            <PDFViewer file={pdfUrl} />
          </div>
        </div>
        <div className="modal-diagrama-footer">
          <button 
            className="btn btn-outline-secondary" 
            onClick={() => window.open(pdfUrl, '_blank')}
          >
            <i className="bi bi-box-arrow-up-right me-2"></i>
            Abrir en nueva pestaña
          </button>
          <a 
            href={pdfUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
            download
          >
            <i className="bi bi-download me-2"></i>
            Descargar PDF
          </a>
        </div>
      </div>
    </div>
  );
};

// proyectos de desarrollo 
const proyectosDesarrollo = [
  {
    id: 1,
    titulo: 'Sistema de Incidencias HEAD',
    descripcion: 'Sistema de gestión de incidencias para la recepción de mercadería en HEAD. Proyecto de título desarrollado en colaboración con dos compañeros. Me encargué del backend, el diseño de la arquitectura, la administración de base de datos (DBA) y el despliegue tanto del backend como del frontend. Además, colaboré en el desarrollo del frontend, especialmente en la implementación de funcionalidades y validaciones.',
    tecnologias: ['Angular', 'FastAPI', 'tailwindcss', 'HTML5/CSS3', 'typescript', 'python', 'JWT', 'vercel', 'render', 'supabase'],
    imagenes: [imagenIncidencias1, imagenIncidencias2],
    enlace: 'https://incidencia-front.vercel.app/home',
    github: 'https://github.com/GustavoAuger/IncidenciaFront'
  },
  {
    id: 2,
    titulo: 'Landing Page DJEventHub',
    descripcion: 'Landing Page para anclar a la app DJEventHub, es una web sencilla con un diseño minimalista pero llamativo visualmente. ',
    tecnologias: ['React', 'Sass', 'JavaScript', 'HTML5/CSS3', 'vercel'],
    imagenes: [imagenDJEventHub1, imagenDJEventHub2],
    enlace: 'https://landing-djevent-hub.vercel.app/',
    github: 'https://github.com/GustavoAuger/LandingDjeventHub'
  },
  {
    id: 3,
    titulo: 'Taller de autos Rayo Maqueen',
    descripcion: 'Web app desarrollada durante mi perioodo de univerisdad. Su funcionalidad principal es la gestión de venta de repuestos y servicios de repración/mantenimiento de autos.',
    tecnologias: ['Django','Python', 'sqlite', 'HTML5/CSS3', 'render'],
    imagenes: [imagenTallerRayoMaqueen1, imagenTallerRayoMaqueen2],
    enlace: 'https://tallerrayomaq.onrender.com/',
    github: 'https://github.com/GustavoAuger/tallerRayoMaq'
  },
  {
    id: 4,
    titulo: 'Proyecto Restaurant',
    descripcion: 'Proyecto desarrollado durante mi periodo de práctica. Esta es una web app pensanda para dispositivos móviles: su funcionalidad principal es la toma de pedidos, gestion de mesas y cocina.',
    tecnologias: ['Vue', 'Tailwindcss', 'JavaScript', 'Node.js (dev)', 'MySQL', 'PHP', 'Laravel', 'HTML5/CSS3'],
    imagenes: [imagenRestaurant1, imagenRestaurant2],
    enlace: 'https://github.com/GustavoAuger/restaurant',
    github: 'https://github.com/GustavoAuger/restaurant'
  }
];

// proyectos devops 
const proyectosDevOps = [
  {
    id: 1,
    titulo: 'Arquitectura VPC Segura en AWS',
    descripcion: 'Red aislada con subred pública y privada, acceso seguro SSH a instancia privada vía salto desde instancia pública. Automatización con Terraform.',
    tecnologias: ['AWS', 'VPC', 'EC2', 'IGW','Networking', 'NAT Gateway', 'Terraform'],
    enlace: '',
    icono: '🛡️',
    diagrama: diagramaVPC,
    manualPdf: ManualRedesEC2NAT,
    codigoTerraform: 'https://github.com/GustavoAuger/Arquitectura-VPC-Segura-en-AWS/tree/main'
  },
  {
    id: 2,
    titulo: 'CI/CD Pipeline IAC & despliegue',
    descripcion: 'Implementación de un pipeline de integración desde su infraestuctura hasta despliegue de código y pruebas de seguridad con Snyk.',
    tecnologias: ['GitHub Actions', 'Docker', 'AWS', 'Terraform', 'SNS', 'SQS', 'Lambda', 'API Gateway', 'EC2', 'ECR', 'Snyk'],
    enlace: '',
    icono: '🔄',
    diagrama: imagenTerraformCICD,
    manualPdf: imagenTerraformCICD,
    codigoTerraform: 'https://github.com/GustavoAuger/Terraform-CICD/actions/runs/12627823797'
  },
];

export default function Proyectos() {
  const [proyectoExpandido, setProyectoExpandido] = useState(null);
  const [categoriaActiva, setCategoriaActiva] = useState('desarrollo');
  const [modalAbierto, setModalAbierto] = useState(false);
  const [modalPdfAbierto, setModalPdfAbierto] = useState(false);
  const [imagenModal, setImagenModal] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');
  const [tituloModal, setTituloModal] = useState('');

  // Configurar PDF.js worker en useEffect
  useEffect(() => {
    // Configuración del worker para react-pdf
    pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
    
    
  }, []);

  // Función para abrir el modal con la imagen del diagrama
  const abrirModal = (imagenUrl, titulo) => {
    setImagenModal(imagenUrl);
    setTituloModal(titulo);
    setModalAbierto(true);
    document.body.style.overflow = 'hidden';
  };

  // Función para cerrar el modal
  const cerrarModal = () => {
    setModalAbierto(false);
    document.body.style.overflow = 'unset';
  };

  // Función para abrir el modal del PDF
  const abrirModalPdf = (url, titulo) => {
    console.log("Abriendo PDF:", url);
    setPdfUrl(url);
    setTituloModal(titulo);
    setModalPdfAbierto(true);
    document.body.style.overflow = 'hidden';
  };

  // Función para cerrar el modal del PDF
  const cerrarModalPdf = () => {
    setModalPdfAbierto(false);
    document.body.style.overflow = 'unset';
  };

  const toggleProyecto = (id) => {
    setProyectoExpandido(proyectoExpandido === id ? null : id);
  };

  return (
    <section className="proyecto">
    <div className="proyectos-container">
      {/* Modal para el diagrama */}
      <ModalDiagrama 
        isOpen={modalAbierto} 
        onClose={cerrarModal} 
        imagenUrl={imagenModal}
        titulo={tituloModal}
      />

      {/* Modal para el PDF */}
      <PdfModal
        isOpen={modalPdfAbierto}
        onClose={cerrarModalPdf}
        pdfUrl={pdfUrl}
      />

      <div className="social-links-container fixed top-4 right-4 z-20">
        <SocialLinks />
      </div>

      <h1 className="titulo-seccion">Mis Proyectos</h1>
      
      <div className="categorias">
        <button 
          className={`categoria-btn ${categoriaActiva === 'desarrollo' ? 'activo' : ''}`}
          onClick={() => setCategoriaActiva('desarrollo')}
        >
          Desarrollo
        </button>
        <button 
          className={`categoria-btn ${categoriaActiva === 'devops' ? 'activo' : ''}`}
          onClick={() => setCategoriaActiva('devops')}
        >
          DevOps
        </button>
      </div>

      <div className="proyectos-lista">
        {categoriaActiva === 'desarrollo' ? (
          <div className="proyectos-desarrollo">
            {proyectosDesarrollo.map((proyecto) => (
              <div key={proyecto.id} className={`proyecto-card ${proyectoExpandido === proyecto.id ? 'expandido' : ''}`}>
                <div className="proyecto-header" onClick={() => toggleProyecto(proyecto.id)}>
                  <h3>{proyecto.titulo}</h3>
                  <span className="toggle-icon">
                    {proyectoExpandido === proyecto.id ? '−' : '+'}
                  </span>
                </div>
                
                <div className="proyecto-contenido">
                  <p>{proyecto.descripcion}</p>
                  
                  {proyectoExpandido === proyecto.id && (
                    <>
                      {proyecto.imagenes && proyecto.imagenes.length > 0 && (
                        <div className="proyecto-galeria">
                          {proyecto.imagenes.map((img, index) => (
                            <div 
                              key={index} 
                              className="proyecto-imagen-contenedor"
                              onClick={() => abrirModal(img, `${proyecto.titulo} - Captura ${index + 1}`)}
                            >
                              <img 
                                src={img} 
                                alt={`Captura ${index + 1} del proyecto ${proyecto.titulo}`}
                                className="proyecto-imagen"
                              />
                              <div className="proyecto-imagen-overlay">
                                <i className="bi bi-zoom-in"></i>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      <div className="proyecto-tecnologias">
                        <strong>Tecnologías:</strong>
                        <div className="tecnologias-lista">
                          {proyecto.tecnologias.map((tech, i) => (
                            <span key={i} className="tecnologia-tag">{tech}</span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="proyecto-enlaces">
                        {proyecto.enlace && (
                          <a href={proyecto.enlace} target="_blank" rel="noopener noreferrer" className="enlace-btn">
                            Ver Proyecto
                          </a>
                        )}
                        {proyecto.github && (
                          <a href={proyecto.github} target="_blank" rel="noopener noreferrer" className="enlace-btn github">
                            Ver en GitHub
                          </a>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="proyectos-devops">
            {proyectosDevOps.map((proyecto) => (
              <div key={proyecto.id} className="proyecto-devops-card">
                <div className="devops-icono">
                  {proyecto.icono || '⚙️'}
                </div>
                <h3>{proyecto.titulo}</h3>
                <p>{proyecto.descripcion}</p>
                <div className="proyecto-tecnologias">
                  {proyecto.tecnologias.map((tech, i) => (
                    <span key={i} className="tecnologia-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="devops-acciones">
                  {/* Botón para ver el diagrama de arquitectura */}
                  <button 
                    className="accion-btn"
                    onClick={() => abrirModal(proyecto.diagrama, proyecto.titulo)}
                    title="Ver diagrama de arquitectura"
                  >
                    <span className="accion-icon">📊</span>
                    <span>Diagrama</span>
                  </button>
                  
                  {/* Botón para ver el PDF del manual */}
                  <button 
                    className="accion-btn"
                    onClick={() => abrirModalPdf(proyecto.manualPdf, proyecto.titulo)}
                    title="Ver manual paso a paso"
                  >
                    <span className="accion-icon">📄</span>
                    <span>Manual PDF</span>
                  </button>
                  
                  {/* Botón para ver el código de Terraform */}
                  <a 
                    href={proyecto.codigoTerraform} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="accion-btn"
                    title="Ver código en GitHub"
                  >
                    <span className="accion-icon">🖥️</span>
                    <span>Terraform</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    </section>
  );
}