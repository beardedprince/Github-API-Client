function getRepo(){
    return $.ajax({
      url: 'https://api.github.com/users/beardedprince/repos',
      datatype:'jsonp',
      success:function(result){
        console.log(result);
        $.each(result, function(i, items){
          console.log( i + '<br>' + items.full_name);
          $('main').append(`
          <table class="table table-stripped">
                <thead>
                    <th scope="col">S/N</th>
                    <th scope="col" id="repo">Repository</th>
                    <th scope="col">Forks</th>
                    <th scope="col">Stars</th>
                </thead>
                <tbody>
                    <tr scope="row">
                        <td >  </td>
                        <td>${items.full_name}</td>
                        <td><button type="button" class="btn btn-primary">
                                Forkers <span class="badge badge-light">${items.forks_count}</span>
                            </button></td>
                        <td><button type="button" class="btn btn-primary">
                            Stars <span class="badge badge-light">${items.total}</span>
                        </button></td>

                    </tr>
                </tbody>
            </table>
          `)
        })
      }
    })
}


function totalCommits(){
  return $.ajax({
    url: 'https://api.github.com/repos/beardedprince/Browser-Default-Launcher/stats/contributors',
    datatype:'jsonp',
    success:function(result){
      console.log(result);
      $.each(result, function(i, items){
        $('main').append(`
        <table class="table table-stripped">
              <thead>
                  <th scope="col">S/N</th>
                  <th scope="col" id="repo">Repository</th>
                  <th scope="col">Forks</th>
                  <th scope="col">Commits</th>
              </thead>
              <tbody>
                  <tr scope="row">
                      <td >  </td>
                      <td></td>
                      <td><button type="button" class="btn btn-primary">
                              Forkers <span class="badge badge-light"></span>
                          </button></td>
                      <td><button type="button" class="btn btn-primary">
                          Stars <span class="badge badge-light">${items.total}</span>
                      </button></td>

                  </tr>
              </tbody>
          </table>
        `)
      })
    }
  })
}

$(document).ready(function(){
  
  getRepo();
  totalCommits();
})