<div class="row">
    <div class="col-md-12">
        <div class="table-responsive table-responsive-data2">

            <table class="table">
                <thead>
                    <tr>
                        <th>SN</th>
                        <th>Inventory Types</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <?php $sn = 1; ?> @foreach($inventorytypes as $inventorytype)
                    <tr class="tr-shadow">

                        <td>{{ $sn++ }} </td>
                        <td>{{ $inventorytype->type }}</td>

                        <td>
                            <div class="table-data-feature">
                                <form action="/editinventorytype/{{$inventorytype->id}}" method="get">
                                    {{ csrf_field() }}

                                    <button class="item" data-toggle="tooltip" data-placement="top" title="Edit">
                                        <i class="zmdi zmdi-edit"></i>
                                    </button>
                                </form>

                                <form action="/deleteinventorytype" method="post">
                                    {{ csrf_field() }}
                                    <input type="hidden" value="{{$inventorytype->id}}" name="id" />
                                    <button class="item" data-toggle="tooltip" data-placement="top" title="Delete">
                                        <i class="zmdi zmdi-delete"></i>
                                    </button>
                                </form>

                            </div>
                        </td>

                    </tr>
                    <tr class="spacer"></tr>
                    @endforeach

                </tbody>
            </table>

        </div>
    </div>
</div>