/**
 * Created by carlos on 20/12/2017.
 */
export class AppModel {
    getData = [
        {
            "urlApp":'http://localhost:4200/',
            "urlApi":'http://localhost:8500/api/',
            'token':'',
            'errApp':'Error interno de la aplicación. Contactar al programador',
            'pageSize':8, // Cantidad de registro en el grid
            'session':'Off',
            'msgExpire':false,
            'RutaImgUser':[
                {
                    "imagen":'./assets/img/user/'
                }
            ],
            'alertas':[
                {
                    'success':[
                        {
                            'ver':false,
                            'mensaje':''
                        }
                    ],
                    'msgOk':[
                        {
                            'ver':false,
                            'mensaje':''
                        }
                    ],
                    'msgError':[
                        {
                            'ver':false,
                            'mensaje':''
                        }
                    ]
                }
            ],
            'nacionalidad':[
                {
                    'idSeleccionado':0,
                    'valueAsigna':'',
                    'data':[
                        {
                            'id':0,
                            'nombre':'SELECCIONAR'
                        },
                        {
                            'id':1,
                            'nombre':'VENEZOLANA'
                        },
                        {
                            'id':2,
                            'nombre':'EXTRANJERA'
                        }
                    ]
                }
            ],
            'estadoCivil':[
                {
                    'id':'0',
                    'nombre':'SELECCIONAR'
                },
                {
                    'id':'1',
                    'nombre':'SOLTERO(A)'
                },
                {
                    'id':'2',
                    'nombre':'CASADO(A)'
                },
                {
                    'id':'3',
                    'nombre':'CONCUVINATO'
                },
                {
                    'id':'4',
                    'nombre':'DIVORCIADO(A)'
                },
                {
                    'id':'5',
                    'nombre':'VIUDO(A)'
                }
            ],
            'sexo':[
                {
                    'id':'0',
                    'nombre':'SELECCIONAR'
                },
                {
                    'id':'1',
                    'nombre':'FEMENINO'
                },
                {
                    'id':'2',
                    'nombre':'MASCULINO'
                }
            ],
            'tipoDocumento':[
                {
                    'id':'0',
                    'nombre':'SELECCIONAR'
                },
                {
                    'id':'1',
                    'nombre':'CEDULA'
                },
                {
                    'id':'2',
                    'nombre':'RIF'
                },
                {
                    'id':'3',
                    'nombre':'PASAPORTE'
                },
                {
                    'id':'4',
                    'nombre':'OTROS'
                }
            ],
            'msg':[
                {
                    'msgNew':'Su perfil no le permite CREAR UN NUEVO registro. Operación Cancelada',
                    'msgEdit':'Su perfil no le permite ACTUALIAR los datos de registro existente. Operación Cancelada',
                    'msgDel':'Su perfil no le permite ELIMINAR de registro existente. Operación Cancelada'
                }
            ],
            'usuarioConect':[
                {
                    'id':0,
                    'email':'',
                    'nombre':'',
                    'rut':'',
                    'foto':'../assets/img/user/sinfoto.png',
                    'preguntaSecreta':'',
                    "fechaUltBloqueo":'',
                    "fechaUltSuspencio":'',
                    "fechaUltBaja":'',
                    'fecha':'',
                    'fechaYMD':'',
                    'Bloqueo':0,
                    "estado":'',
                    'seccionActiva':0,
                    'cerradaSesion':false,
                    "modulos":[],
                    'idEmpresa':'0',
                    'idSucural':'0',
                    'panel':false,
                    'new':0,
                    'edit':0,
                    'del':0,
                    'nivel':0,
                    'empresa':'',
                    'rutEmpresa':'',
                    "ModuloSeleccionado":''
                }
            ],
            'AuditorSearch':[
                {
                    'pagina':'0',
                    'cantRegitro':'10',
                    'nombre':'',
                    'totRegistro':0,
                    'ano':'',
                    'mes':'',
                    'dia':'',
                    'fecha':'',
                    'hora':'',
                    'username':'',
                    'registro':'',
                    'ips':''
                }
            ],
            'empresa':[
                {
                    'empresaCombo':[],
                    'sucursale':[],
                }
            ],
            'Perfil':[
                {
                    'PerfilData':[],
                    'PerfilForm':[
                        {
                            'id':'0',
                            'nombre':'',
                            'nivel':'0',
                            'estado':'0',
                            'tituloForm':'',
                            'modalForm':false,
                            'modalDelete':false
                        }
                    ],
                    'PerfilGrid':[
                        {
                            'totRegistro':0,
                            'pagina':'0',
                            'cantRegitro':'10',
                            'nombre':'',
                        }
                    ]

                }
            ],
            'Menu':[
                {
                    'MenuData':[],
                    'MenuForm':[
                        {
                            'id':'0',
                            'nombre':'',
                            'tipoMenu':'0', // Padre
                            'controlador':'',
                            'icono':'',
                            'estado':'0',
                            'tituloForm':'',
                            'modalForm':false,
                            'modalDelete':false
                        }
                    ],
                    'MenuGrid':[
                        {
                            'totRegistro':0,
                            'pagina':'0',
                            'cantRegitro':'10',
                            'nombre':'',
                            'controlador':'',
                            'icono':'',
                        }
                    ]

                }
            ]
        }
    ]
}
