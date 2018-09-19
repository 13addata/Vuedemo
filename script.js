   var vm = new Vue({
        el: '#tab',
        data: {
            content:('<h1>original msg</h1>'),
            curId: 1,
            ok: true
        },
        methods: {
            clkhtml () {
                this.content = '<h2>html</h2> <p>filling rendom dummy content</p>',
                this.curId = 1
            },
            clkcss () {
                this.content = '<style> p { color: #e92; font-size: 46px;};  </style><h2>css</h2> <p>this one has different color</p>',
                this.curId = 2
            },
            clkjs () {
                this.content = '<h2>js</h2> <p>filling fjklafjklsjkfljklsajdl</p>',
                this.curId = 3
            },
            clkvue () {
                this.content = '<h2>vue</h2> <p>filling vuevuevuevuevuevue</p>',
                this.curId = 4
            }
        }        
    });