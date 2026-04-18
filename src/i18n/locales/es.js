export default {
  translation: {
    meta: {
      tagline: 'Para constructores. Por constructores. En ningún otro lugar.',
      edition: 'Manifiesto — Volumen I',
      focus: 'IA · Blockchain · Sistemas · Herramientas',
      collective: 'Minnesota · Colectivo Tecnológico',
      founding: 'Est. 2025 · Edición Fundadora',
      domain: 'mnstack.dev',
    },

    nav: {
      overview: 'Descripción',
      layers: 'Capas de Plataforma',
      membership: 'Membresía',
      events: 'Eventos',
      zoom: 'Estructura Zoom',
      tech: 'Stack Tecnológico',
      roadmap: 'Hoja de Ruta',
      manifesto: 'Manifiesto →',
      blueprint: '← Plataforma',
    },

    landing: {
      header: {
        subtitle: 'Arquitectura de Plataforma v1.0',
        date: 'Abril 2025',
        copy: 'Interno — Copia del Fundador',
        title: 'Estructura\nde la\nPlataforma.',
        description:
          'Una arquitectura completa para el colectivo tecnológico {{name}} — desde la membresía hasta los meetups mensuales por Zoom, herramientas y hoja de ruta de crecimiento.',
        pills: ['Solo Zoom', 'Aplicar O Ser Invitado', 'Meetups Mensuales (50+)', 'Solo Minnesota', 'Gratis'],
      },

      overview: {
        sectionTitle: 'Descripción General',
        cards: [
          { label: 'Plataforma Principal', value: 'Zoom', desc: 'Meetups mensuales por Zoom como el latido de la comunidad. Sin fatiga de apps. Todo el mundo conoce Zoom.' },
          { label: 'Modelo de Membresía', value: 'Doble Acceso', desc: 'Aplica directamente desde la página de inicio O recibe el aval de un miembro existente. Ambos caminos convergen en revisión.' },
          { label: 'Cadencia de Eventos', value: 'Mensual', desc: 'Un meetup insignia por Zoom al mes, 50+ miembros. El tema rota: IA, Blockchain, Dev Abierto, etc.' },
          { label: 'Geografía', value: 'Solo MN', desc: '100% Minnesota. Zoom elimina las barreras de distancia — de Duluth a Rochester, todos bienvenidos.' },
        ],
        callout: {
          title: 'El principio central: mínima fricción, máxima señal.',
          body: 'Zoom significa cero desplazamientos, sin costos de sede y máxima asistencia. La comunidad crece gracias a la calidad de la conversación — no por la logística. Mantén las herramientas invisibles para que la charla técnica sea lo único que importa.',
          statValue: '0',
          statLabel: 'Costos de sede\npara empezar',
        },
      },

      layers: {
        sectionTitle: 'Capas de la Plataforma',
        items: [
          {
            num: 'Capa 1', title: 'Puerta Pública',
            desc: 'La página de inicio es la única superficie pública. Comunica el manifiesto, áreas de enfoque y el único CTA: Solicitar Acceso. Sin feed social. Sin foro público. El misterio genera señal.',
            tools: ['mnstack.dev (página de inicio)', 'Formulario de aplicación', 'Typeform o formulario personalizado'],
            phaseLabel: 'Fase 1',
          },
          {
            num: 'Capa 2', title: 'Registro de Miembros',
            desc: 'Un directorio privado de miembros — buscable por área de enfoque, ciudad y habilidades. No es una red social. Es una agenda profesional del colectivo. Los miembros pueden ver quién está en la sala antes de una sesión Zoom.',
            tools: ['Airtable (inicio simple)', 'Vista solo para miembros', 'Etiquetas por área de enfoque', 'Filtro por ciudad MN'],
            phaseLabel: 'Fase 1',
          },
          {
            num: 'Capa 3', title: 'Capa de Comunicación',
            desc: 'Comunicación asíncrona entre meetups. Liviana — aquí no vive la comunidad, Zoom sí. Usada para recordatorios de eventos, votación de temas, hilos post-meetup y compartir recursos entre sesiones.',
            tools: ['Newsletter por correo (principal)', 'Slack o Discord (secundario)', 'Substack o Beehiiv'],
            phaseLabel: 'Fase 1',
          },
          {
            num: 'Capa 4', title: 'Motor de Eventos',
            desc: 'El sistema de coordinación del meetup mensual por Zoom. Gestiona la programación, RSVP (links solo para miembros), coordinación de ponentes/temas y distribución del link de Zoom. Grabaciones opcionalmente compartidas post-sesión.',
            tools: ['Zoom (licencia recurrente)', 'Luma para RSVPs', 'Invitaciones de calendario', 'Recordatorios por correo'],
            phaseLabel: 'Fase 1',
          },
          {
            num: 'Capa 5', title: 'Archivo de Conocimiento',
            desc: 'Una biblioteca en evolución de grabaciones de sesiones anteriores, recursos compartidos, links de demos y listas de lectura curadas por tema. Los miembros contribuyen. Se convierte en el ADN intelectual del colectivo con el tiempo.',
            tools: ['Notion (espacio de trabajo privado)', 'Archivo de grabaciones Zoom', 'Links curados por track'],
            phaseLabel: 'Fase 2',
          },
          {
            num: 'Capa 6', title: 'Sub-Grupos',
            desc: 'Cuando la membresía supera los 100, se crean cohortes Zoom por enfoque: un grupo de IA, uno de Blockchain, etc. — más pequeños, más técnicos, se reúnen bimestralmente. El meetup principal sigue siendo el colectivo completo.',
            tools: ['Salas de espera Zoom', 'Eventos separados en Luma', 'Listas de invitación por interés'],
            phaseLabel: 'Fase 3',
          },
        ],
      },

      membership: {
        sectionTitle: 'Sistema de Membresía',
        pathA: {
          title: 'Camino A — Aplicación Directa',
          sub: 'Cualquier persona en Minnesota puede aplicar desde la página pública',
          steps: [
            { title: 'Enviar formulario', desc: 'Nombre, correo, ciudad, GitHub/portafolio, áreas de enfoque y una pregunta libre: "¿Qué estás construyendo o aprendiendo ahora mismo?"' },
            { title: 'Revisión del fundador', desc: 'Revisas en 72 horas. Buscando constructores genuinos, no currículums. El link del portafolio es la señal más importante.' },
            { title: 'Correo de aprobación', desc: 'Los miembros aceptados reciben un correo de bienvenida con el link al directorio, la próxima fecha de Zoom y el documento de normas de la comunidad.' },
            { title: 'Primer acceso a Zoom', desc: 'Se envía el link RSVP para el próximo meetup mensual. Los nuevos miembros son presentados al inicio de cada sesión.' },
          ],
        },
        pathB: {
          title: 'Camino B — Aval de Miembro',
          sub: 'Los miembros existentes avalan a alguien que conocen personalmente',
          steps: [
            { title: 'El miembro envía la referencia', desc: 'Un formulario corto: a quién están avalando, qué construyen y por qué pertenecen. El miembro pone su nombre.' },
            { title: 'Invitación automática enviada', desc: 'Una referencia avalada salta la cola de revisión del fundador. El referido recibe un correo de invitación personal con el nombre del miembro que lo avala.' },
            { title: 'El referido completa su perfil', desc: 'Completa información básica y áreas de enfoque para aparecer en el directorio de miembros. 5 minutos.' },
            { title: 'Límite de aval: 3', desc: 'Cada miembro puede avalar hasta 3 personas por trimestre. Mantiene alta la calidad y hace que el aval se sienta significativo.' },
          ],
        },
        tiers: [
          {
            tag: 'Nivel 1', name: 'Observador',
            desc: 'Recién aprobado. Asiste a meetups, explora el directorio. Construyendo confianza antes de contribuir.',
            features: [
              { label: 'Acceso mensual a Zoom', check: true },
              { label: 'Directorio de miembros', check: true },
              { label: 'Newsletter', check: true },
              { label: 'Avalar otros', check: false },
              { label: 'Presentar en meetup', check: false },
              { label: 'Acceso a sub-grupos', check: false },
            ],
          },
          {
            tag: 'Nivel 2', name: 'Miembro',
            desc: 'Después de 2 meetups asistidos. Acceso completo. El estado predeterminado para la mayoría del colectivo.',
            featured: true,
            features: [
              { label: 'Acceso mensual a Zoom', check: true },
              { label: 'Directorio de miembros', check: true },
              { label: 'Newsletter', check: true },
              { label: 'Avalar otros (3/trim)', check: true },
              { label: 'Presentar en meetup', check: true },
              { label: 'Acceso a sub-grupos', check: true },
            ],
          },
          {
            tag: 'Nivel 3', name: 'Guardián',
            desc: 'Invitado por el fundador. Ayuda a gestionar temas, incorporar nuevos miembros, moderar el colectivo.',
            features: [
              { label: 'Todo en Miembro', check: true },
              { label: 'Coordinación de temas', check: true },
              { label: 'Incorporar nuevos miembros', check: true },
              { label: 'Co-anfitrión en Zoom', check: true },
              { label: 'Avalar ilimitado', check: true },
              { label: 'Curación del archivo', check: true },
            ],
          },
        ],
      },

      events: {
        sectionTitle: 'Estructura de Eventos',
        cards: [
          {
            title: 'Meetup Mensual Insignia',
            meta: 'Zoom · Todos los Miembros · 50–100 personas · 90 min',
            items: [
              'Temático en torno a un área de enfoque por mes (IA en ene, Blockchain en feb, Dev Abierto en mar, etc.)',
              '2–3 demos de miembros o charlas relámpago (10 min cada una, sin diapositivas — demos en vivo preferidas)',
              'Una discusión estructurada o Q&A abierto sobre el tema del mes',
              'Presentaciones de nuevos miembros al inicio — 30 segundos cada uno, nombre + qué construyes',
              'Salas de trabajo al final — 15 min de networking abierto por grupo de interés',
              'Grabación disponible solo para miembros por 30 días post-sesión',
            ],
          },
          {
            title: 'Calendario de Rotación de Temas',
            meta: 'Cadencia anual — se repite cada año',
            items: [
              'Ene / Jul — IA y Aprendizaje Automático',
              'Feb / Ago — Blockchain y Sistemas Distribuidos',
              'Mar / Sep — Herramientas Dev, Infra y Sistemas',
              'Abr / Oct — Seguridad y Criptografía',
              'May / Nov — Tech Abierto (tema votado por miembros)',
              'Jun / Dic — Show & Tell — todo vale, solo demos',
            ],
          },
          {
            title: 'Envío de Ponentes / Demo',
            meta: 'Cómo los miembros llegan a la agenda',
            items: [
              'Formulario simple en Airtable: qué estás demostrando, en qué tema del mes encaja, cuánto tiempo necesitas',
              'Los Guardianes curan 2–3 demos por sesión — sin CFP formal, sin diapositivas requeridas',
              'Los ponentes primerizos tienen prioridad para generar compromiso temprano en la comunidad',
              'Sin ventas, sin anuncios de reclutamiento — solo el tema primero',
            ],
          },
          {
            title: 'Futuro: Eventos Presenciales',
            meta: 'Fase 2 — una vez que la comunidad en línea sea estable',
            items: [
              'Meetup presencial trimestral en Minneapolis/St. Paul — mismo formato, sede física',
              'Encuentro anual de MN Stack — estilo unconference de día completo, 100+ miembros',
              'Grupos satélite por ciudad: Duluth, Rochester, St. Cloud — cafés mensuales auto-organizados',
              'Costos de sede cubiertos por cuotas opcionales de miembros (solo Fase 2)',
            ],
          },
        ],
      },

      zoom: {
        sectionTitle: 'Plan de Sesión Zoom',
        runOfShow: {
          title: 'Guión Estándar de 90 Minutos',
          schedule: [
            { time: '0:00', title: 'Puertas Abiertas / Lobby', desc: 'Zoom abre 10 min antes. Chat casual, cámara encendida recomendada. Música de fondo opcional.' },
            { time: '0:10', title: 'Bienvenida y Nuevos Miembros', desc: 'El anfitrión abre la sesión. Los nuevos miembros hacen presentaciones de 30 segundos: nombre + qué construyen. Sin títulos.' },
            { time: '0:20', title: 'Demo / Charla #1', desc: 'Demo en vivo de 10 min o charla relámpago. Código en vivo, producto en vivo o prototipo en vivo preferido sobre diapositivas.' },
            { time: '0:35', title: 'Demo / Charla #2', desc: 'Segundo presentador. Q&A entretejido — el co-anfitrión trae las preguntas del chat en tiempo real.' },
            { time: '0:50', title: 'Demo / Charla #3 (opcional)', desc: 'Tercera demo si está disponible. De lo contrario, ir a la discusión estructurada antes.' },
            { time: '1:05', title: 'Discusión Estructurada', desc: 'El anfitrión plantea 1–2 preguntas sobre el tema del mes. Formato de micrófono abierto. Típicamente 15–20 personas intervienen.' },
            { time: '1:25', title: 'Salas de Trabajo', desc: '3–4 salas por área de interés. 15 min. Auto-organizadas, sin agenda. El mejor networking de la sesión.' },
            { time: '1:40', title: 'Cierre y Próximo Mes', desc: 'El grupo completo se reúne de nuevo. El anfitrión anuncia el tema del próximo mes, convoca demos y cierra la sesión.' },
          ],
        },
        rules: {
          title: 'Reglas de la Sesión',
          items: [
            { title: 'Cámara encendida', desc: 'No requerida pero muy recomendada. La comunidad se siente real cuando los rostros son visibles.' },
            { title: 'Sin discursos de venta', desc: 'Las demos son técnicas. Si alguien menciona recaudar dinero o contratar, el anfitrión redirige.' },
            { title: 'Chat moderado', desc: 'El co-anfitrión trae las mejores preguntas. Se eliminan spam o links fuera de tema.' },
            { title: 'Consentimiento de grabación', desc: 'Anunciado al inicio. Acceso solo para miembros por 30 días. Sin compartir públicamente.' },
            { title: 'Salas opcionales', desc: 'Las salas de trabajo son opcionales. Quedarse en la sala principal está bien.' },
            { title: 'Un anfitrión, un co-anfitrión', desc: 'El anfitrión lleva el show. El co-anfitrión monitorea el chat, gestiona las salas, vigila el tiempo.' },
          ],
        },
      },

      tech: {
        sectionTitle: 'Stack Tecnológico',
        cards: [
          {
            category: 'Capa Pública', title: 'Landing y Aplicaciones',
            items: [
              { name: 'Página de inicio', note: 'HTML personalizado o Webflow' },
              { name: 'Formulario de aplicación', note: 'Typeform o Tally.so' },
              { name: 'Dominio', note: 'mnstack.dev' },
              { name: 'Formulario de aval', note: 'Mismo Typeform, vista diferente' },
            ],
          },
          {
            category: 'Capa de Miembros', title: 'Directorio y Registro',
            items: [
              { name: 'Base de datos de miembros', note: 'Airtable (Fase 1)' },
              { name: 'Vista del directorio', note: 'Vista compartida Airtable (solo miembros)' },
              { name: 'Incorporación', note: 'Secuencia de correos (3 correos)' },
              { name: 'Actualizaciones de perfil', note: 'Formulario Airtable autoservicio' },
            ],
          },
          {
            category: 'Comunicación', title: 'Canales Asíncronos',
            items: [
              { name: 'Newsletter', note: 'Beehiiv o Substack' },
              { name: 'Recordatorios de eventos', note: 'Correo (3 días + 1 día antes)' },
              { name: 'Chat asíncrono', note: 'Slack (opcional, Fase 1.5)' },
              { name: 'Resumen post-sesión', note: 'Digest de newsletter' },
            ],
          },
          {
            category: 'Eventos', title: 'Motor de Meetups',
            items: [
              { name: 'Plataforma de video', note: 'Zoom (Pro o Business)' },
              { name: 'RSVP', note: 'Luma (eventos solo para miembros)' },
              { name: 'Envíos de ponentes', note: 'Formulario Airtable' },
              { name: 'Calendario', note: 'Invite Google Cal, archivo ICS' },
            ],
          },
          {
            category: 'Conocimiento', title: 'Archivo y Recursos',
            items: [
              { name: 'Grabaciones de sesiones', note: 'Zoom cloud (límite 30 días)' },
              { name: 'Biblioteca de recursos', note: 'Notion (Fase 2)' },
              { name: 'Archivo de links de demos', note: 'Registros vinculados en Airtable' },
              { name: 'Listas de lectura', note: 'Notion por área de enfoque' },
            ],
          },
          {
            category: 'Administración', title: 'Operaciones y Automatización',
            items: [
              { name: 'Revisión de aplicaciones', note: 'Airtable + correo' },
              { name: 'Automatización', note: 'n8n o Zapier' },
              { name: 'Costo mensual', note: '~$60–100/mes para empezar' },
              { name: 'Analítica', note: 'Seguimiento de asistencia en Airtable' },
            ],
          },
        ],
      },

      roadmap: {
        sectionTitle: 'Hoja de Ruta de Lanzamiento',
        phases: [
          {
            label: 'Fase 1 — Fundación', name: 'Lanzamiento',
            timeline: 'Mes 1–3 · Meta: 50 miembros, 3 meetups',
            colorClass: 'text-mn-green-text', dotClass: 'bg-mn-green-text',
            items: [
              'Publicar página de inicio + formulario de aplicación',
              'Configurar registro de miembros en Airtable',
              'Sembrar 10–15 miembros desde la red personal',
              'Realizar los primeros 3 meetups mensuales por Zoom',
              'Establecer cadencia de newsletter por correo',
              'Definir y publicar el documento de normas de la comunidad',
              'Identificar 2–3 Guardianes fundadores',
              'Activar Luma para gestión de RSVPs',
            ],
          },
          {
            label: 'Fase 2 — Crecimiento', name: 'Impulso',
            timeline: 'Mes 4–9 · Meta: 150 miembros, asistencia constante de 50+',
            colorClass: 'text-blue-900', dotClass: 'bg-blue-900',
            items: [
              'Activar sistema de avales de miembros',
              'Abrir Slack para comunicaciones asíncronas',
              'Lanzar archivo de conocimiento en Notion',
              'Primer evento presencial (MSP)',
              'Grupos satélite por ciudad (Duluth, Rochester)',
              'Temas votados por miembros para meses abiertos',
              'Digest de newsletter post-sesión',
              'Construir pipeline de envío de demos',
            ],
          },
          {
            label: 'Fase 3 — Escala', name: 'Comunidad',
            timeline: 'Mes 10–18 · Meta: 300+ miembros, encuentro anual',
            colorClass: 'text-amber-800', dotClass: 'bg-amber-800',
            items: [
              'Zooms de sub-grupos por enfoque (IA, Blockchain)',
              'Unconference anual de MN Stack (presencial)',
              'Opción de cuotas de miembros para eventos presenciales',
              'Plataforma personalizada de miembros (reemplazar Airtable)',
              'Red de ponentes alumni',
              'Explorar colectivo de investigación MN Stack',
              'Alianzas con universidades locales',
              'Newsletter de MN Stack como señal pública',
            ],
          },
        ],
      },

      footer: {
        blueprintLabel: 'Arquitectura de Plataforma v1.0',
        internal: 'Documento interno — Solo para el Fundador',
        date: 'Abril 2025',
      },
    },

    manifesto: {
      wordmark: 'EL MANIFIESTO TECNOLÓGICO DE MINNESOTA',
      openingLabel: 'Declaración Inicial',
      opening:
        "Minnesota tiene una escena tecnológica. Solo que ha sido <italic>invisible</italic> — dispersa entre corporaciones, enterrada en startups, oculta detrás de NDAs y títulos de LinkedIn. <bold>{{name}} existe para hacerla visible.</bold> No por negocios. No por capital. Por el arte de construir cosas que antes no existían.",
      pullQuote: 'Creemos que las mejores\nconversaciones de tecnología\nocurren cuando\n<red>nadie está vendiendo nada.</red>',
      columns: [
        {
          n: 'I',
          title: 'Minnesota está subestimada.',
          body: 'Las costas se llevan los titulares. Minnesota hace el trabajo. Los ingenieros aquí construyen sistemas de aprendizaje automático, protocolos distribuidos e infraestructura de producción que rivaliza con cualquier cosa que salga de San Francisco o Nueva York. La diferencia es que nadie habla de ello. Nosotros tenemos la intención de cambiar eso.',
        },
        {
          n: 'II',
          title: 'Los espacios existentes no son para nosotros.',
          body: 'Cada otro evento tecnológico en este estado es un evento de networking disfrazado. Mezclas de startups. Noches de pitches. Escaparates de marca empleadora. Tienen un propósito — solo que no el nuestro. MN Stack es la sala que no existía: conversación técnica pura, sin agenda adjunta. Si quieres hablar de una prueba ZK en la que llevas tiempo trabajando, aquí es donde lo haces.',
        },
        {
          n: 'III',
          title: 'La comunidad se construye apareciendo.',
          body: 'No hay ponentes. No hay patrocinadores. No hay paneles. Cada miembro es un par. La persona que lleva quince años escribiendo Rust se sienta junto a la persona que lanzó su primer contrato inteligente el mes pasado, y ambos se van sabiendo algo que no sabían antes. Esa es la única métrica que importa.',
        },
      ],
      tenetsLabel: 'Los Principios',
      tenetsTitle: 'En qué creemos.',
      tenets: [
        { n: '01', title: 'La tecnología es la única agenda.', body: 'IA, blockchain, sistemas distribuidos, herramientas de desarrollo, criptografía aplicada, programación de sistemas, hardware. Si lo construyes con código, pertenece aquí. Las conversaciones comienzan y terminan con el trabajo en sí — no quién lo financió, no a dónde va, no cuánto vale.', verdict: 'Innegociable' },
        { n: '02', title: 'Sin discursos de venta. Ni una vez.', body: 'No vas a hacer un pitch de tu startup aquí. No vas a mencionar tu ronda. No vas a repartir tarjetas de visita a alguien que acabas de conocer y llamarlo "conectar." Si haces una demo, la haces porque es técnicamente interesante — punto final.', verdict: 'Obligatorio' },
        { n: '03', title: 'Demos sobre presentaciones. Siempre.', body: 'Un software funcionando vale más que mil transiciones de diapositivas. Si quieres compartir algo, comparte algo que funcione — o algo que casi funciona y estás tratando de entender por qué. La cosa a medias mostrada honestamente es más valiosa que la cosa pulida mostrada estratégicamente.', verdict: 'Preferido' },
        { n: '04', title: 'Minnesota, siempre.', body: 'Esta comunidad está arraigada aquí. No porque las costas sean malas, sino porque la densidad local crea relaciones reales. Queremos que el ingeniero en Duluth y el investigador en Rochester sepan que el otro existe. La geografía es una característica, no una limitación.', verdict: 'Por Diseño' },
        { n: '05', title: 'La calidad es el mecanismo de acceso.', body: 'La membresía no es automática. Aplicas, o alguien que te conoce personalmente te avala. No porque seamos elitistas — sino porque la calidad de una comunidad la determina quién está en la sala. Una sala más pequeña con las personas correctas vale más que una sala grande con todos.', verdict: 'Intencional' },
        { n: '06', title: 'La curiosidad supera a las credenciales.', body: 'Tu título no significa nada aquí. Tu GitHub importa más que tu currículum. La pregunta que haces importa más que la empresa para la que trabajas. Un desarrollador autodidacta con genuina curiosidad pertenece a esta sala más que un ingeniero senior que dejó de aprender hace tres años.', verdict: 'Siempre' },
      ],
      forYouLabel: 'Esto es para ti si —',
      forYouTitle: 'Construyes\ncosas.',
      forYou: [
        'Has lanzado algo técnico y quieres hablar sobre cómo funciona',
        'Estás metido en un tema y quieres encontrar a alguien más que haya estado ahí',
        'Piensas en problemas de IA, blockchain o sistemas en la ducha',
        'Aprendes mejor viendo la demo en vivo de alguien más fallar',
        'Estás en Minnesota y estás cansado de ir a eventos de startups',
        'Te importa más el arte que el resultado',
      ],
      notForYouLabel: 'Esto no es para ti si —',
      notForYouTitle: 'Vendes\ncosas.',
      notForYou: [
        'Buscas co-fundadores, inversores o primeros clientes',
        'Tu objetivo es "construir tu marca personal" en la tecnología de Minnesota',
        'Quieres agregar 50 conexiones de LinkedIn de un solo evento',
        'No has escrito código, configurado infraestructura ni lanzado nada técnico recientemente',
        'Ves la comunidad como un canal de distribución',
        'Planeas reclutar miembros para tu equipo o empresa',
      ],
      applyStamp: 'Aplicar Ya',
      closingLabel: 'En Conclusión',
      closing:
        '{{name}} no intenta ser la comunidad tecnológica más grande de Minnesota. Intenta ser la <bold>más necesaria.</bold> La sala que los constructores serios desearían que existiera — <muted>así que la construimos.</muted>\n\nSi eso suena como tu sala, la puerta está abierta. <bold>Ven como constructor. Sal siendo mejor.</bold>',
      closingStats: [
        { label: 'Tipo de comunidad', value: 'Colectivo cerrado' },
        { label: 'Geografía', value: 'Solo Minnesota' },
        { label: 'Enfoque', value: 'IA · Blockchain · Sistemas' },
        { label: 'Formato', value: 'Meetups mensuales por Zoom' },
        { label: 'Acceso', value: 'Aplicar o ser avalado' },
        { label: 'Costo', value: 'Gratis, siempre' },
        { label: 'Discursos de venta', value: 'Nunca.' },
      ],
      footerTagline: 'Colectivo Tecnológico de Minnesota · Manifiesto Vol. I · 2025 · mnstack.dev',
      footerSub: 'Para constructores. Por constructores.',
    },
  },
}
