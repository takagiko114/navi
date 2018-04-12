// This is a JavaScript file

// ============================================================================================ -->
// _/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/ -->
//                　　　　　　　　  　　        　　    　　                                    -->
//                　　　　　　　　   Method section     　　                                    -->
//                　　　　　　　　  　　        　　    　　                                    -->
// _/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/ -->
// ============================================================================================ -->

function deleteDB(){
    console.log(getTime() + "deleteDB");
    var db = window.openDatabase("Database", "1.0", "AccountID", 200000);
    db.transaction(deleteDBQuery, errorCB, successCB);
} 

// ============================================================================================ -->
// _/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/ -->
//                　　　　　　　　  　　        　　    　　                                    -->
//                　　　　　　　　    Query section     　　                                    -->
//                　　　　　　　　  　　        　　    　　                                    -->
// _/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/ -->
// ============================================================================================ -->

function deleteDBQuery(tx){
    tx.executeSql('DROP TABLE IF EXISTS AccountID');
}

function createDBQueryAccountID(tx){
    tx.executeSql('CREATE TABLE IF NOT EXISTS AccountID' +
                  ' (id integer primary key autoincrement,' +
                  ' site_name text,' + 
                  ' category_id text,' + 
                  ' account_id text,' + 
                  ' account_pw text,' + 
                  ' register_date text,' + 
                  ' update_date text' +
                  ')');
}

function createDBQueryRirekiKanri(tx){
    tx.executeSql('CREATE TABLE IF NOT EXISTS RirekiKanri' +
                  ' (id integer primary key autoincrement,' +
                  ' site_name text,' + 
                  ' category_id text,' + 
                  ' account_id text,' + 
                  ' account_pw text,' + 
                  ' register_date text,' + 
                  ' update_date text' +
                  ')');
}

