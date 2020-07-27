#include <bits/stdc++.h>

using namespace std;

string ltrim(const string &);
string rtrim(const string &);
vector<string> split(const string &);

/*
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

vector<int> dynamicArray(int n, vector<vector<int>> queries) {

    long int lasta=0,j=0,m=0,k=0,l=0,o=0,z=0,pk,lst;
    int siz = queries.size();
    int lsta[siz];

    for(int i=0;i<siz;i++){
        if(queries[i][0]==2){
            o++;
        }
    }
    int lm=o;
    vector <int> posi(o);
    vector <int> seqto(o);
    vector <int> res(o);
    int pos;
    for(int i=0;i<siz;i++){
        lasta = lsta[i];
        if(queries[i][0]==2){
            
            seqto[k] = (queries[i][1]^lasta)%n; 
            k++;
            z=1;
        
        }
        if(z==1){
            vector <int> seqv(i);
            pk = seqto[k-1];
            for(int o=0;o<i;o++){
                lasta = lsta[o];
                if(((queries[o][1]^lasta)%n)==pk){
                    seqv[m] = queries[o][2];
                    m++;
                }  
                if(o==i-1){
                    
                    pos = queries[i][2]%m;
                    res[j] = seqv[pos];
                    lsta[i] = res[j];
                    j++;
                    z=0;
                    m=0;
                }
            }

        }
        lsta[i+1] = lsta[i];    
    }



    return res;






}

int main()
{
    ofstream fout(getenv("OUTPUT_PATH"));

    string first_multiple_input_temp;
    getline(cin, first_multiple_input_temp);

    vector<string> first_multiple_input = split(rtrim(first_multiple_input_temp));

    int n = stoi(first_multiple_input[0]);

    int q = stoi(first_multiple_input[1]);

    vector<vector<int>> queries(q);

    for (int i = 0; i < q; i++) {
        queries[i].resize(3);

        string queries_row_temp_temp;
        getline(cin, queries_row_temp_temp);

        vector<string> queries_row_temp = split(rtrim(queries_row_temp_temp));

        for (int j = 0; j < 3; j++) {
            int queries_row_item = stoi(queries_row_temp[j]);

            queries[i][j] = queries_row_item;
        }
    }

    vector<int> result = dynamicArray(n, queries);

    for (int i = 0; i < result.size(); i++) {
        fout << result[i];

        if (i != result.size() - 1) {
            fout << "\n";
        }
    }

    fout << "\n";

    fout.close();

    return 0;
}

string ltrim(const string &str) {
    string s(str);

    s.erase(
        s.begin(),
        find_if(s.begin(), s.end(), not1(ptr_fun<int, int>(isspace)))
    );

    return s;
}

string rtrim(const string &str) {
    string s(str);

    s.erase(
        find_if(s.rbegin(), s.rend(), not1(ptr_fun<int, int>(isspace))).base(),
        s.end()
    );

    return s;
}

vector<string> split(const string &str) {
    vector<string> tokens;

    string::size_type start = 0;
    string::size_type end = 0;

    while ((end = str.find(" ", start)) != string::npos) {
        tokens.push_back(str.substr(start, end - start));

        start = end + 1;
    }

    tokens.push_back(str.substr(start));

    return tokens;
}

