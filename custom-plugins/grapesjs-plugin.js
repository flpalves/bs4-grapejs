function myPlugin(editor) {
    editor.BlockManager.add('inputGroup', {
        attributes: { class: 'gjs-fonts gjs-f-b1' },
        label: 'Input',
        category: 'Bootstrap Forms',
        content: `
        <div class="form-group">
            <label for="exampleInputEmail1">Label</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        `,
    });
    editor.BlockManager.add('selectSingle', {
        attributes: { class: 'gjs-fonts gjs-f-b1' },
        label: 'Select Single',
        category: 'Bootstrap Forms',
        content: `
            <div class="form-group">
                <label for="exampleFormControlSelect1">Example select</label>
                <select class="form-control" id="exampleFormControlSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
        `,
    });
    editor.BlockManager.add('selectMultiple', {
        attributes: { class: 'gjs-fonts gjs-f-b1' },
        label: 'Select Multiple',
        category: 'Bootstrap Forms',
        content: `
            <div class="form-group">
                <label for="exampleFormControlSelect2">Example multiple select</label>
                <select multiple class="form-control" id="exampleFormControlSelect2">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
        `,
    });
    editor.BlockManager.add('textarea', {
        attributes: { class: 'gjs-fonts gjs-f-b1' },
        label: 'Text Area',
        category: 'Bootstrap Forms',
        content: `
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        `,
    });
    editor.BlockManager.add('form', {
        attributes: { class: 'gjs-fonts gjs-f-b1' },
        label: 'Form',
        category: 'Bootstrap Forms',
        content: `
            <form class="" method="post" name="">
            </form>
        `,
    });
    editor.BlockManager.add('uploadFile', {
        attributes: { class: 'gjs-fonts gjs-f-b1' },
        label: 'Upload File',
        category: 'Bootstrap Forms',
        content: `
            <div class="form-group">
                <label for="exampleFormControlFile1">Example file input</label>
                <input type="file" class="form-control-file" id="exampleFormControlFile1">
            </div>
        `,
    });
    editor.BlockManager.add('checkbox', {
        attributes: { class: 'gjs-fonts gjs-f-b1' },
        label: 'Checkbox',
        category: 'Bootstrap Forms',
        content: `
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                <label class="form-check-label" for="defaultCheck1">
                    Default checkbox
                </label>
            </div>
        `,
    });
    editor.BlockManager.add('radio', {
        attributes: { class: 'gjs-fonts gjs-f-b1' },
        label: 'Radio',
        category: 'Bootstrap Forms',
        content: `
            <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                <label class="form-check-label" for="exampleRadios1">
                    Default radio
                </label>
            </div>
        `,
    });
    editor.BlockManager.add('button', {
        attributes: { class: 'gjs-fonts gjs-f-b1' },
        label: 'Button',
        category: 'Bootstrap Forms',
        content: `
            <button type="submit" class="btn btn-primary">Sign in</button>
        `,
    });
    editor.BlockManager.add('breadcrumbs', {
        attributes: { class: 'gjs-fonts gjs-f-b1' },
        label: 'Breadcrumbs',
        category: 'Bootstrap Itens',
        content: `
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item"><a href="#">Library</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Data</li>
                </ol>
            </nav>
        `,
    });
    editor.BlockManager.add('rule', {
        attributes: { class: 'gjs-fonts gjs-f-b1' },
        label: 'Rule',
        category: 'Bootstrap Itens',
        content: `
            <hr class="my-3"/>
        `,
    });
    editor.BlockManager.add('listGroup', {
        attributes: { class: 'gjs-fonts gjs-f-b1' },
        label: 'List Group',
        category: 'Bootstrap Itens',
        content: `
            <ul class="list-group">
                <li class="list-group-item">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Morbi leo risus</li>
                <li class="list-group-item">Porta ac consectetur ac</li>
                <li class="list-group-item">Vestibulum at eros</li>
            </ul>
        `,
    });
    editor.BlockManager.add('table', {
        attributes: { class: 'gjs-fonts gjs-f-b1' },
        label: 'Table',
        category: 'Bootstrap Itens',
        content: `
            <table class="table table-responsive">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </table>
        `,
    });
}